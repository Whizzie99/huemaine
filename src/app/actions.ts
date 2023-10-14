"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_EMAIL_API);

export const sendEmailAction = async (prevState: any, formData: FormData) => {
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
    // console.log("email sent!");
    // console.log(data);
    return {
      message: "Thanks, your message has been sent!",
    };
    // return NextResponse.json(data);
  } catch (error) {
    // return NextResponse.json({ error });
    return {
      message: "Sorry, your message failed to send",
    };
  }
};
