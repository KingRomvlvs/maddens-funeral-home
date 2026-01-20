import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

    if (!convexUrl) {
      return NextResponse.json(
        { error: "Convex not configured" },
        { status: 503 }
      );
    }

    const client = new ConvexHttpClient(convexUrl);

    const body = await request.json();
    const { question, conversationId, sessionId } = body;

    if (!question || !sessionId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await client.action(api.agent.chat.ask, {
      question,
      conversationId,
      sessionId,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
