import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.contactMessages = new Map();
    this.currentId = 1;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const newMessage: ContactMessage = { ...message, id };
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
