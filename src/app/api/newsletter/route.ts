import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };
  const email = body.email?.trim();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      message:
        "Signup form is ready. Add BUTTONDOWN_API_KEY to activate real subscriptions.",
    });
  }

  const response = await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      tags: ["website"],
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Could not subscribe right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "You’re in. Watch your inbox for future essays.",
  });
}
