import { ArrowDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import cv from "@/assets/Mohamed-Sebbar-CV.pdf";


const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center pt-16"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-accent font-heading font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-up opacity-0">
         AEC en développement web et Mobile - Montreal,Québec 
        </p>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-secondary-foreground leading-tight mb-6 animate-fade-up opacity-0 animation-delay-200">
          Développeur Web
          <br />
          <span className="text-gradient">Full Stack</span>
        </h1>
        <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body animate-fade-up opacity-0 animation-delay-400">
          Applications web modernes, performantes et maintenables. Approche rigoureuse et orientée résultats.

        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animation-delay-600">
          <div className="flex justify-start mb-10">
  <span className="inline-flex items-center whitespace-nowrap rounded-full border border-secondary-foreground/20 bg-secondary-foreground/10 px-4 py-2 text-sm text-secondary-foreground/80">
    Montréal, QC • Disponible • Temps plein / Stage
  </span>
</div>



          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8">
            <a href="#projets">
              <ArrowDown className="mr-2 h-4 w-4" />
              Voir mes projets
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 font-heading font-semibold text-base px-8"
          >
            <a href={cv} download>

              <FileDown className="mr-2 h-4 w-4" />
              Télécharger mon CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
