import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact message submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const errorMessage = fromZodError(result.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      const contactMessage = await storage.createContactMessage(result.data);
      res.status(201).json({ message: "Mensagem enviada com sucesso!", data: contactMessage });
    } catch (error) {
      console.error("Error submitting contact message:", error);
      res.status(500).json({ message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente." });
    }
  });

  // Get all contact messages (administrative endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Erro ao buscar mensagens de contato." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
