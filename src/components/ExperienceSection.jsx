import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Summer Research Intern – IIIT Sricity (TIHAN, IIT Hyderabad)
                </h4>
                <p className="text-muted-foreground text-sm">Jun 2024 – Aug 2024</p>
                <ul className="list-disc list-inside text-muted-foreground mt-2">
                  <li>
                    Collected drone data from 50+ mango farms, improving efficiency by 20%, and trained YOLO for
                    object detection, increasing accuracy by 10%.
                  </li>
                  <li>
                    Developed image processing and ML models in Python, enhancing yield estimation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};