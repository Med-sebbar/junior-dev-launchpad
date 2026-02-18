import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMeteo from "@/assets/project-meteo.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectTodo from "@/assets/project-todo.jpg";

const projects = [
  {
    title: "Portfolio Personnel",
    desc: "Site portfolio moderne développé avec React, Vite et Tailwind CSS pour présenter mes compétences et projets.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: projectPortfolio,
  },
  {
    title: "Application To-Do",
    desc: "Application de gestion de tâches avec ajout, suppression et sauvegarde locale des données.",
    techs: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    image: projectTodo,
  },
];

const Projects = () => {
  return (
    <section id="projets" className="section-padding bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-center">
          Mes Projets
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-lg overflow-hidden border border-border group hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={`Capture d'écran du projet ${p.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.techs.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-medium">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="gap-2 text-xs" asChild>
                    <a href="#contact">
                      <Github className="h-3.5 w-3.5" /> Code Source
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2 text-xs bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="#contact">
                      <ExternalLink className="h-3.5 w-3.5" /> Voir la démo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
