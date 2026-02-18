import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";


const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(1, "Le message est requis").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  const result = contactSchema.safeParse(form);
  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
    });
    setErrors(fieldErrors);
    return;
  }

  setErrors({});

  emailjs
    .send(
      "service_bn7wfki",
      "template_u8xbq8j",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "Ofuddbx_QLtgu2YAn"
    )
    .then(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci, je vous répondrai rapidement.",
      });
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      toast({
        title: "Erreur",
        description: "Impossible d’envoyer le message.",
      });
    });
};

  return (
    <section id="contact" className="section-padding bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-center">
          Contactez-moi
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
        <p className="text-muted-foreground text-center mb-12">
          Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter !
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">Nom *</label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Votre nom"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1 block">Email *</label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1 block">Message *</label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Votre message..."
                rows={5}
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
              Envoyer
            </Button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6">
            <a href="mailto:mon.email@portfolio.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm">msebbar.00@gmail.com</span> <br></br>
              
              <a href="tel:5142146681" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
    📞
  </div>
  <span className="text-sm">514-214-6681</span>
</a>

            </a>
            <a href="https://www.linkedin.com/in/mohamed-sebbar-45358a120/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/Med-sebbar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
