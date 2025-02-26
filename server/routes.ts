import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

const emailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Create reusable transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Using Gmail service preset
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // App Password from Gmail
    },
  });

  // Verify SMTP connection on startup
  try {
    await transporter.verify();
    console.log('SMTP Server is ready to send emails');
  } catch (error) {
    console.error('SMTP Server verification failed:', error);
  }

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = emailSchema.parse(req.body);

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`, // Using authenticated email as sender
        to: "smitdankhra86@gmail.com",
        subject: "New Portfolio Contact Form Submission",
        text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Message: ${validatedData.message}
        `,
        html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Message:</strong> ${validatedData.message}</p>
        `,
        replyTo: validatedData.email // Allow replying directly to the sender
      });

      console.log('Message sent: %s', info.messageId);
      res.json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ 
        message: "Failed to send email. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}