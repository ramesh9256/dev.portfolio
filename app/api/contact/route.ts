import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    const { firstName, lastName, email, phone, message } = validatedData;

    // 1. Transporter Create Karein
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Aapka Gmail (e.g., ramesh@gmail.com)
        pass: process.env.EMAIL_PASS, // Aapka 16-digit App Password
      },
    });

    // 2. Email Options Setup Karein
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "9256.ramesh@gmail.com", // Jaha mail receive karna hai
      replyTo: email, // Isse aap direct sender ko reply kar payenge
      subject: `New Lead: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #004d2c;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <strong>Message:</strong><br/>${message}
          </div>
        </div>
      `,
    };

    // 3. Email Send Karein
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}