import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from 'resend';
import { z } from "zod";

const emailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  const resend = new Resend(process.env.RESEND_API_KEY);

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = emailSchema.parse(req.body);

      await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: ['smitdankhra86@gmail.com'],
        subject: 'New Portfolio Contact Form Submission',
        reply_to: validatedData.email,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong> ${validatedData.message}</p>
        `,
      });

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