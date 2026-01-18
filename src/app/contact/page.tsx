import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Twitter,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Stone",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    description: "Best for professional inquiries",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@your-username",
    href: "https://twitter.com/your-username",
    description: "Quick questions and DMs",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "your-username",
    href: "https://github.com/your-username",
    description: "Open source collaboration",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "your-username",
    href: "https://linkedin.com/in/your-username",
    description: "Professional networking",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What's this about?"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className={cn(
                      "w-full px-4 py-3 rounded-xl resize-none",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
                    "bg-primary text-primary-foreground font-medium",
                    "hover:opacity-90 transition-all hover:scale-[1.02]",
                    "glow-primary"
                  )}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info */}
              <div className="glass rounded-3xl p-8">
                <h2 className="text-xl font-bold mb-6">Contact Info</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        China (Remote-friendly)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h2 className="text-xl font-bold mb-6">Find Me Online</h2>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl",
                        "bg-muted/50 hover:bg-primary/10 transition-colors",
                        "group"
                      )}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {method.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
