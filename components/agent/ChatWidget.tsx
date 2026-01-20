"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CloseIcon, SendIcon, ArrowDownIcon } from "@/components/icons";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const presetQuestions = [
  "What services do you offer?",
  "How do I plan a funeral?",
  "What are your locations?",
  "Tell me about cremation options",
  "How can I pre-plan arrangements?",
  "What is the Christmas Treat program?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Show intro after delay on first visit
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("maddens-chat-intro");
    if (!hasSeenIntro) {
      const timer = setTimeout(() => {
        setShowIntro(true);
        localStorage.setItem("maddens-chat-intro", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-dismiss intro
  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 7000);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response (will be replaced with Convex integration)
    setTimeout(() => {
      const responses: Record<string, string> = {
        "What services do you offer?":
          "Madden's Funeral Home offers a comprehensive range of services including traditional funerals, cremation services, graveside services, repatriation for international arrangements, pre-planning consultations, and cemetery services. We've been serving Jamaican families for over 90 years with dignity and compassion.",
        "How do I plan a funeral?":
          "Planning a funeral can feel overwhelming, but we're here to help. Start by contacting us at (876) 952-0212 (Montego Bay) or (876) 926-2079 (Kingston). We'll guide you through every step, from selecting services to arranging the ceremony. You can also visit our 'When Someone Dies' page for immediate guidance.",
        "What are your locations?":
          "We have multiple locations to serve you:\n\n**Montego Bay:** 37 Union Street, Montego Bay\nPhone: (876) 952-0212\n\n**Kingston:** 42a Constant Spring Road, Kingston 10\nPhone: (876) 926-2079\n\nWe also have facilities in Lucea. All locations are available 24/7.",
        "Tell me about cremation options":
          "We offer three cremation service options:\n\n1. **Before Cremation:** Traditional viewing and service before cremation\n2. **After Cremation:** Service held after cremation with the urn present\n3. **Direct Cremation:** Cremation without a formal service\n\nOur Dovecot Memorial Park in Montego Bay houses a modern crematorium with options including columbarium niches and urn gardens.",
        "How can I pre-plan arrangements?":
          "Pre-planning allows you to make thoughtful decisions about your final arrangements while relieving your family of this burden. Benefits include:\n\n- Peace of mind knowing your wishes will be honored\n- Protection of your family from difficult decisions\n- Locked-in pricing\n- Flexible payment options\n\nContact us to schedule a no-obligation consultation.",
        "What is the Christmas Treat program?":
          "The Christmas Treat is an annual community initiative started by our founder. Every December, we distribute food packages to over 500 economically disadvantaged elderly and disabled members of our community. This tradition has grown from 250 recipients in its first year to over 1,000 people. It's our way of giving back to the community that has supported us for over 90 years.",
      };

      const response = responses[messageText] ||
        "Thank you for your question. Our team is here to help you 24/7. For immediate assistance, please call us at (876) 952-0212 (Montego Bay) or (876) 926-2079 (Kingston). We'll be happy to assist you with any questions about our services.";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Intro Popup */}
      <AnimatePresence>
        {showIntro && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 max-w-xs bg-white dark:bg-funeral-navy rounded-lg shadow-xl border border-border p-4"
          >
            <button
              onClick={() => setShowIntro(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <CloseIcon size={16} />
            </button>
            <p className="text-sm font-medium mb-1">Need assistance?</p>
            <p className="text-xs text-muted-foreground mb-3">
              Our AI assistant can help answer your questions about funeral services,
              pre-planning, and more.
            </p>
            <Button
              size="sm"
              onClick={() => {
                setShowIntro(false);
                setIsOpen(true);
              }}
              className="w-full text-xs"
            >
              Start Chatting
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowIntro(false);
        }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-funeral-charcoal text-white"
            : "bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90"
        }`}
      >
        {isOpen ? (
          <ArrowDownIcon size={24} />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {/* Pulse animation when not open */}
        {!isOpen && messages.length === 0 && (
          <span className="absolute inset-0 rounded-full bg-funeral-gold animate-ping opacity-30" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] bg-background rounded-lg shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-funeral-navy px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-funeral-gold/20 flex items-center justify-center">
                <span className="text-funeral-gold text-sm font-medium">M</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Madden&apos;s Assistant</p>
                <p className="text-white/60 text-xs">Here to help 24/7</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-funeral-gold/10 flex items-center justify-center mb-4">
                    <span className="text-funeral-gold text-2xl font-light">M</span>
                  </div>
                  <p className="text-sm font-medium mb-2">Welcome to Madden&apos;s</p>
                  <p className="text-xs text-muted-foreground mb-6">
                    How can we assist you today? Select a question below or type your own.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {presetQuestions.slice(0, 4).map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSend(question)}
                        className="px-3 py-1.5 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors text-left"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-4 py-2 ${
                          message.role === "user"
                            ? "bg-funeral-gold text-funeral-navy"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg px-4 py-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  className="flex-1 resize-none bg-muted rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-funeral-gold/50 max-h-20"
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  size="sm"
                  className="h-auto px-3 bg-funeral-gold text-funeral-navy hover:bg-funeral-gold/90"
                >
                  <SendIcon size={18} />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2">
                Powered by AI • For urgent matters, call (876) 952-0212
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
