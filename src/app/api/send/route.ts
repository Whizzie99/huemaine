"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_EMAIL_API);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("fullName") as string;
  const senderEmail = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const data = await resend.emails.send({
      from: "contact form <onboarding@resend.dev>",
      to: "huemainedev@gmail.com",
      reply_to: senderEmail,
      subject: subject,
      text: message,
    });
    console.log("email sent!");
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
