"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

interface AdminUser {
  id: string;
  username: string;
  name: string;
}

interface AuthContextType {
  user: AdminUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "mfh_admin_token";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Get token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    setToken(storedToken);
    setIsInitialized(true);
  }, []);

  // Validate session with Convex
  const user = useQuery(
    api.auth.validateSession,
    token ? { token } : "skip"
  );

  // Mutations
  const loginMutation = useMutation(api.auth.login);
  const logoutMutation = useMutation(api.auth.logout);
  const refreshMutation = useMutation(api.auth.refreshSession);

  // Refresh session periodically
  useEffect(() => {
    if (!token || !user) return;

    const refreshInterval = setInterval(() => {
      refreshMutation({ token });
    }, 60 * 60 * 1000); // Refresh every hour

    return () => clearInterval(refreshInterval);
  }, [token, user, refreshMutation]);

  // Clear token if session is invalid
  useEffect(() => {
    if (isInitialized && token && user === null) {
      localStorage.removeItem(TOKEN_KEY);
      setToken(null);
    }
  }, [isInitialized, token, user]);

  const login = useCallback(
    async (username: string, password: string) => {
      try {
        const result = await loginMutation({ username, password });
        if (result.success && result.token) {
          localStorage.setItem(TOKEN_KEY, result.token);
          setToken(result.token);
          return { success: true };
        }
        return { success: false, error: result.error || "Login failed" };
      } catch {
        return { success: false, error: "Login failed" };
      }
    },
    [loginMutation]
  );

  const logout = useCallback(async () => {
    if (token) {
      await logoutMutation({ token });
    }
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }, [token, logoutMutation]);

  const isLoading = !isInitialized || (token !== null && user === undefined);
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user: user as AdminUser | null,
        isLoading,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
