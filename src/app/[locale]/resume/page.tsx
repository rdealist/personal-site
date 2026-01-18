import { Metadata } from "next";
import {
  Download,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and experience",
};

const experience = [
  {
    title: "AI Product Builder",
    company: "Independent",
    period: "2024 - Present",
    location: "Remote",
    description: [
      "Building AI-powered products and applications",
      "Exploring LLM capabilities and developing AI agents",
      "Creating tools for developers and businesses",
    ],
  },
  {
    title: "Tech Entrepreneur",
    company: "Startup",
    period: "2022 - 2024",
    location: "China",
    description: [
      "Founded and scaled multiple tech products",
      "Led product development and technical strategy",
      "Managed cross-functional teams",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Tech Company",
    period: "2020 - 2022",
    location: "China",
    description: [
      "Developed web applications using React and Node.js",
      "Implemented CI/CD pipelines and DevOps practices",
      "Collaborated with design and product teams",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree",
    school: "University",
    period: "2016 - 2020",
    field: "Computer Science",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    date: "2022",
  },
];

const skills = {
  "AI/ML": ["LLMs", "Prompt Engineering", "RAG", "LangChain", "Fine-tuning"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Python", "Node.js", "FastAPI", "PostgreSQL"],
  DevOps: ["Docker", "Git", "AWS", "Vercel", "CI/CD"],
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-gradient">Stone</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  AI Explorer & Product Builder
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    China
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    your@email.com
                  </span>
                </div>
              </div>

              <button
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                  "bg-primary text-primary-foreground font-medium",
                  "hover:opacity-90 transition-all hover:scale-105",
                  "glow-primary shrink-0"
                )}
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Experience
            </h2>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Skills
            </h2>

            <div className="glass rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-medium mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary"
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

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h2>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.field}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
