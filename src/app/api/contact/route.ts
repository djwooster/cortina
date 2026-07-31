import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO = "federico@cortinanc.com";
const CONTACT_FROM = "Cortina <federico@cortinanc.com>";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    !name.trim() ||
    !email.trim()
  ) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      typeof message === "string" && message.trim()
        ? message
        : "(no message provided)",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
