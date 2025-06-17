import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Tech Enthusiast & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I'm currently pursuing a Bachelor of Technology in Electronics and Communication Engineering
              at IIIT Sri City. I have a deep interest in software development and enjoy building efficient,
              impactful solutions using modern technologies.
            </p>

            <p className="text-muted-foreground">
              My interests span across web development, IoT, and machine learning. I love solving real-world
              problems through code and collaborating on innovative projects that create real impact.
            </p>

            <p className="text-muted-foreground">
              Learning and improving every day is what drives me.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable and efficient solutions with a focus on real-world applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">IoT & Embedded Systems</h4>
                  <p className="text-muted-foreground">
                    Developing smart, sensor-based systems and integrating hardware with software.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning Projects</h4>
                  <p className="text-muted-foreground">
                    Exploring data-driven solutions using supervised learning and real-world datasets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
