import { Lightbulb, Eye, Users } from "lucide-react";

const strengths = [
  { icon: Lightbulb, title: "Motivé et curieux", desc: "Toujours en apprentissage continu et intéressé par les nouvelles technologies." },
  { icon: Eye, title: "Sérieux et rigoureux", desc: "Souci du détail et respect des bonnes pratiques de développement." },
  { icon: Users, title: "Travail d’équipe", desc: "Bonne communication et capacité à collaborer dans un environnement professionnel." },
];

const About = () => {
  return (
    <section id="apropos" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-center">
          À propos de moi
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        Développeur web full stack formé en développement web et applicatif, je conçois des solutions structurées adaptées aux besoins réels. Rigoureux et orienté résultats, je m’intègre rapidement dans un environnement technique et contribue activement aux projets d’équipe avec une approche professionnelle et évolutive.

        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
