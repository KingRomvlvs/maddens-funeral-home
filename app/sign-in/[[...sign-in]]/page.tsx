"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading, login } = useAuth();
  const hasAdmin = useQuery(api.auth.hasAdminUser);
  const setupAdmin = useMutation(api.auth.setupAdmin);

  const [isSetupMode, setIsSetupMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/admin");
    }
  }, [isLoading, isAuthenticated, router]);

  // Check if we need setup mode
  useEffect(() => {
    if (hasAdmin === false) {
      setIsSetupMode(true);
    }
  }, [hasAdmin]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const result = await login(username, password);
      if (result.success) {
        router.push("/admin");
      } else {
        setError(result.error || "Login failed");
      }
    } catch {
      setError("An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setSubmitting(false);
      return;
    }

    try {
      const result = await setupAdmin({ username, password, name });
      if (result.success) {
        // Now login with the new credentials
        const loginResult = await login(username, password);
        if (loginResult.success) {
          router.push("/admin");
        } else {
          setError("Account created but login failed. Please try logging in.");
          setIsSetupMode(false);
        }
      } else {
        setError(result.error || "Setup failed");
      }
    } catch {
      setError("An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading || hasAdmin === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-funeral-gold border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg border bg-card p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold">
              {isSetupMode ? "Set Up Admin Account" : "Admin Login"}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              {isSetupMode
                ? "Create your admin credentials to get started"
                : "Sign in to access the admin portal"}
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={isSetupMode ? handleSetup : handleLogin} className="space-y-4">
            {isSetupMode && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-funeral-gold"
                  placeholder="John Madden"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-funeral-gold"
                placeholder="admin"
                required
                autoComplete="username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-funeral-gold"
                placeholder="••••••••"
                required
                autoComplete={isSetupMode ? "new-password" : "current-password"}
              />
              {isSetupMode && (
                <p className="text-xs text-muted-foreground mt-1">
                  Must be at least 8 characters
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-funeral-gold hover:bg-funeral-gold/90 text-white"
              disabled={submitting}
            >
              {submitting
                ? "Please wait..."
                : isSetupMode
                  ? "Create Admin Account"
                  : "Sign In"}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to website
            </Link>
          </div>
        </div>

        {/* Branding */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Madden&apos;s Funeral Home & Crematorium
        </p>
      </div>
    </div>
  );
}
