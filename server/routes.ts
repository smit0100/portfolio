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
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = emailSchema.parse(req.body);

      // Send mail with defined transport object
      await transporter.sendMail({
        from: `"Portfolio Contact" <${validatedData.email}>`,
        to: "smitdankhra86@gmail.com",
        subject: "New Contact Form Submission",
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