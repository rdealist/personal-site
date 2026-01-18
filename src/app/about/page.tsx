import { Metadata } from "next";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Code,
  Brain,
  Rocket,
  Coffee,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Stone - AI Explorer & Product Builder",
};

const timeline = [
  {
    year: "2024",
    title: "AI Product Builder",
    description: "Building AI-powered products and exploring LLM applications",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Deep Dive into AI",
    description: "Started intensive learning journey in AI/ML and LLMs",
    icon: Brain,
  },
  {
    year: "2022",
    title: "Tech Entrepreneur",
    description: "Founded and scaled multiple tech products",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Full-Stack Developer",
    description: "Building web applications and mastering modern frameworks",
    icon: Code,
  },
];

const interests = [
  { name: "AI Research", icon: Brain },
  { name: "Product Design", icon: Rocket },
  { name: "Open Source", icon: Code },
  { name: "Coffee", icon: Coffee },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Hi, I'm <span className="text-gradient">Stone</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            AI Explorer, Product Builder, and Lifelong Learner
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <section className="mb-16">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>Based in China</span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I'm passionate about the intersection of{" "}
                  <strong>artificial intelligence</strong> and{" "}
                  <strong>practical product development</strong>. My journey in tech
                  has taken me from full-stack development to AI/ML exploration,
                  always with a focus on building things that matter.
                </p>
                <p>
                  Currently, I'm focused on understanding and applying{" "}
                  <strong>Large Language Models (LLMs)</strong>, building AI agents,
                  and creating products that leverage these powerful technologies.
                </p>
                <p>
                  I believe in <strong>learning in public</strong> - sharing my
                  journey, insights, and experiments with the community. This site
                  is a reflection of that philosophy.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0",
                        "bg-primary/10 relative z-10"
                      )}
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-6 flex-1">
                      <span className="text-primary text-sm font-medium">
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              Things I <Heart className="w-6 h-6 inline text-accent" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={cn(
                    "glass rounded-2xl p-6 text-center",
                    "hover:border-primary/50 transition-all"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <interest.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium">{interest.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
