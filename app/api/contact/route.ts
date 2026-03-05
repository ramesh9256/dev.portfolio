import { NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import formData from "form-data";
import { contactFormSchema } from "@/lib/contact";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "", // Mailgun API Key
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    const { firstName, lastName, email, phone, message } = validatedData;

    await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `Portfolio Contact <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: ["9256.ramesh@gmail.com"], //
      subject: `New Lead: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #004d2c;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p style="background: #f9f9f9; padding: 15px;"><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mailgun Error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 400 });
  }
}