import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = insertContactMessageSchema.extend({
  email: z.string().email("Por favor, insira um email válido"),
  phone: z.string().min(8, "Por favor, insira um número de telefone válido"),
  name: z.string().min(3, "Por favor, insira seu nome completo"),
  service: z.string().min(1, "Por favor, selecione um serviço"),
  message: z.string().min(10, "Por favor, escreva uma mensagem com pelo menos 10 caracteres"),
});

export function ContactForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const res = await apiRequest("POST", "/api/contact", values);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada",
        description: "Entraremos em contato em breve!",
      });
      form.reset();
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <svg 
          className="mx-auto h-12 w-12 text-green-500 mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
        <p className="text-gray-600 mb-4">
          Agradecemos seu contato. Nossa equipe responderá o mais breve possível.
        </p>
        <Button 
          onClick={() => setSubmitted(false)} 
          variant="outline"
        >
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="seu.email@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Serviço Desejado</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="guincho">Guincho</SelectItem>
                  <SelectItem value="borracharia">Borracharia</SelectItem>
                  <SelectItem value="mecanica">Mecânica Geral</SelectItem>
                  <SelectItem value="eletrica">Elétrica Automotiva</SelectItem>
                  <SelectItem value="oleo">Troca de Óleo</SelectItem>
                  <SelectItem value="ar">Ar Condicionado</SelectItem>
                  <SelectItem value="pecas">Peças e Acessórios</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descreva sua necessidade em detalhes" 
                  rows={4} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-[#E94560] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </Form>
  );
}
