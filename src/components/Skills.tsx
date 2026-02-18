const categories = [
  {
    title: "Front-end",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "React"],
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Back-end & Architecture",
    skills: ["Node.js", "PHP", "C#", "API REST", "MVC", "CRUD"],
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Bases de données & Outils",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Postman"],
    color: "bg-secondary/50 text-secondary-foreground",
  },
];


const Skills = () => {
  return (
    <section id="competences" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-center">
          Mes Compétences
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-lg p-6 border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
              <h3 className="font-heading font-semibold text-foreground mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
