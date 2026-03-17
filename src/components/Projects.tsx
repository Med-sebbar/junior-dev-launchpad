import { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import ssDashboard    from "@/assets/oceanstock-screenshots/Dashboard.png";
import ssAlertes      from "@/assets/oceanstock-screenshots/Alertes.png";
import ssAnalytique   from "@/assets/oceanstock-screenshots/Analytique.png";
import ssBonsAchat    from "@/assets/oceanstock-screenshots/Bons-d'achat.png";
import ssCategorie    from "@/assets/oceanstock-screenshots/Categorie.png";
import ssCommandes    from "@/assets/oceanstock-screenshots/Commandes.png";
import ssFactures     from "@/assets/oceanstock-screenshots/Factures.png";
import ssLogin        from "@/assets/oceanstock-screenshots/Login.png";
import ssLots         from "@/assets/oceanstock-screenshots/Lots.png";
import ssMouvements   from "@/assets/oceanstock-screenshots/Mouvements.png";
import ssPaiements    from "@/assets/oceanstock-screenshots/paiements.png";
import ssParametres   from "@/assets/oceanstock-screenshots/Paramètres.png";
import ssProduit      from "@/assets/oceanstock-screenshots/Produit.png";
import ssUtilisateurs from "@/assets/oceanstock-screenshots/Utilisateurs.png";

const oceanstockDashboard = ssDashboard;
const screenshots = [
  { src: ssDashboard,    label: "Dashboard" },
  { src: ssAnalytique,   label: "Analytique" },
  { src: ssAlertes,      label: "Alertes" },
  { src: ssBonsAchat,    label: "Bons d'achat" },
  { src: ssCommandes,    label: "Commandes" },
  { src: ssFactures,     label: "Factures" },
  { src: ssPaiements,    label: "Paiements" },
  { src: ssLots,         label: "Lots" },
  { src: ssMouvements,   label: "Mouvements" },
  { src: ssCategorie,    label: "Catégories" },
  { src: ssProduit,      label: "Produits" },
  { src: ssUtilisateurs, label: "Utilisateurs" },
  { src: ssParametres,   label: "Paramètres" },
  { src: ssLogin,        label: "Login" },
];

const projects = [
  {
    title: "Ocean Stock",
    desc: "Application web fullstack de gestion de stock pour produits frais — KPIs en temps réel, méthode FEFO, gestion des lots, achats fournisseurs, ventes, facturation et analytique avancée.",
    techs: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT", "Recharts", "Vite"],
    image: oceanstockDashboard,
    github: "https://github.com/Med-sebbar/ocean-stock",
    hasGallery: true,
  },
];

// ── GALERIE LIGHTBOX ──
const Gallery = ({ onClose }: { onClose: () => void }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  // Fermer avec Escape
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
      onKeyDown={handleKey}
      tabIndex={0}
      autoFocus
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div>
          <p className="text-white font-semibold text-lg">🌊 Ocean Stock</p>
          <p className="text-white/50 text-xs mt-0.5">
            {current + 1} / {screenshots.length} — {screenshots[current].label}
          </p>
        </div>
        <button onClick={onClose}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Image principale */}
      <div className="flex-1 flex items-center justify-center px-4 py-4 relative">
        <button onClick={prev}
          className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={screenshots[current].src}
          alt={screenshots[current].label}
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
        />

        <button onClick={next}
          className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="px-4 py-3 border-t border-white/10 overflow-x-auto">
        <div className="flex gap-2 w-max mx-auto">
          {screenshots.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`shrink-0 rounded-lg overflow-hidden transition border-2 ${
                i === current ? "border-blue-400 opacity-100" : "border-transparent opacity-50 hover:opacity-75"
              }`}>
              <img src={s.src} alt={s.label} className="h-14 w-20 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section id="projets" className="section-padding bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-center">
          Mes Projets
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-lg overflow-hidden border border-border group hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              {/* Image principale */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={p.image}
                  alt={`Capture d'écran du projet ${p.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Badge nombre de screenshots */}
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  📸 {screenshots.length} captures
                </div>
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
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" /> Code Source
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 text-xs bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setShowGallery(true)}
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Voir la démo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GALERIE LIGHTBOX */}
      {showGallery && <Gallery onClose={() => setShowGallery(false)} />}
    </section>
  );
};

export default Projects;
