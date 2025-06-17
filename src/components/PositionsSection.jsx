import { Briefcase } from "lucide-react";

export const PositionsSection = () => {
  return (
    <section id="positions" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Positions <span className="text-primary">of Responsibility</span>
        </h2>

        <div className="space-y-6">
          <div className="gradient-border p-6 card-hover">
            <h4 className="font-semibold text-lg">Co-Lead – Nirvana, IIIT Sricity</h4>
            <p className="text-muted-foreground text-sm">Jun 2024 – Present</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>
                Led a team of 50 members across 6 domains, focusing on personal growth and well-being.
              </li>
              <li>
                Organized workshops promoting mindfulness, spirituality, and self-improvement.
              </li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <h4 className="font-semibold text-lg">Data Science Wing Lead – Connexion</h4>
            <p className="text-muted-foreground text-sm">Jan 2025 – Present</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>Mentoring 1st and 2nd-year students in data science and ML.</li>
              <li>
                Conducting sessions on data preprocessing, model building, and overseeing AI/ML IoT projects.
              </li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <h4 className="font-semibold text-lg">Student Development Council Member – IIIT Sricity</h4>
            <p className="text-muted-foreground text-sm">Aug 2023 – Aug 2024</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>Implemented student engagement strategies through innovative activities.</li>
              <li>Promoted college initiatives and secured sponsorships during public events.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
