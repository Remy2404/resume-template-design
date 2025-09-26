"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Code,
  ExternalLink,
  Github,
  Globe,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ServerCog,
  Smartphone,
  TrendingUp,
} from "lucide-react";

type SkillGroup = {
  title: string;
  level: "Advanced" | "Intermediate" | "Working";
  icon: LucideIcon;
  gradient: string;
  badges: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  results: string[];
  tags: string[];
};

type ProjectItem = {
  name: string;
  caption: string;
  summary: string;
  results: string[];
  stack: string[];
  href: string;
};

type QuickLink = {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
  badge?: string;
  tone: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    level: "Advanced",
    icon: Code,
    gradient: "from-blue-50 to-blue-100 border-blue-200",
    badges: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Design Systems"],
  },
  {
    title: "Backend & DevOps",
    level: "Intermediate",
    icon: ServerCog,
    gradient: "from-emerald-50 to-emerald-100 border-emerald-200",
    badges: ["Node.js", "Express", "Python", "MySQL", "PostgreSQL", "Docker"],
  },
  {
    title: "AI & Automation",
    level: "Intermediate",
    icon: Brain,
    gradient: "from-purple-50 to-purple-100 border-purple-200",
    badges: ["Gemini", "OpenAI", "Multi-model Orchestration", "Webhook Bots"],
  },
  {
    title: "Mobile & Cross-platform",
    level: "Working",
    icon: Smartphone,
    gradient: "from-amber-50 to-amber-100 border-amber-200",
    badges: ["React Native", "Expo", "Responsive UI", "Offline-first UX"],
  },
];

const experience: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    company: "Spring Education Center",
    period: "Spring 2023",
    location: "Phnom Penh, Cambodia",
    summary:
      "Top performer selected from 100+ interns during a 4-week cross-functional program spanning marketing, sales, and software delivery.",
    results: [
      "Optimized API and database queries, cutting learner dashboard load times by 25% across 500+ active users.",
      "Built Telegram & Discord automation bots that reduced manual community-support triage by 6 hours every week.",
      "Partnered with KhmerCoder mentors to ship React + TypeScript feature updates within two-week sprints and zero regressions.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Telegram API"],
  },
  {
    role: "Full-Stack Project Lead",
    company: "Self-Directed & Freelance Projects",
    period: "2023 – Present",
    location: "Remote",
    summary:
      "Deliver AI-enabled web experiences and automation tooling while pursuing a BSc in Information Technology (Year 4).",
    results: [
      "Shipped Polymind AI assistant orchestrating 50+ models; maintains 92% satisfaction score from 120 weekly users.",
      "Delivered a financial insights dashboard that gave peers real-time spending visibility, reducing monthly budgeting time by 40%.",
      "Maintained 45+ GitHub repositories with automated CI checks, documentation, and semantic release notes.",
    ],
    tags: ["Next.js", "Python", "CI/CD", "Data Visualization"],
  },
];

const projects: ProjectItem[] = [
  {
    name: "Polymind AI Platform",
    caption: "Multi-modal assistant • 7 ⭐ on GitHub",
    summary:
      "Telegram-first AI copilot integrating Gemini, DeepSeek, and OpenRouter models for chat, voice, and document intelligence.",
    results: [
      "Designed a streaming inference pipeline that dropped average response time from 11s to 3.2s.",
      "Implemented voice and PDF understanding workflows that solved 85% of user questions without human escalation.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Telegram Bot API"],
    href: "https://github.com/Remy2404/Polymind",
  },
  {
    name: "Apsara AI Workspace",
    caption: "TypeScript + Next.js",
    summary:
      "Responsive web portal for experimenting with prompt libraries, AI personas, and knowledge-base retrieval.",
    results: [
      "Refactored UI into reusable component slots, shrinking bundle size by 18% and boosting Lighthouse performance to 92.",
      "Added analytics dashboard that tracks persona usage patterns and informs weekly content updates.",
    ],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    href: "https://github.com/Remy2404/apsara-ai",
  },
  {
    name: "Financial Compass",
    caption: "Personal finance intelligence",
    summary:
      "Full-stack budgeting assistant with rules-based alerts, multi-wallet tracking, and AI-generated savings insights.",
    results: [
      "Aggregated daily spend across 4 accounts and surfaced anomalies within 30 seconds via server-sent events.",
      "Launched data visualisations that helped beta testers cut discretionary expenses by 17% after one month.",
    ],
    stack: ["React", "Node.js", "Chart.js", "MongoDB"],
    href: "https://github.com/Remy2404/financial-app",
  },
];

const quickLinks: QuickLink[] = [
  {
    label: "GitHub",
    value: "github.com/Remy2404",
    icon: Github,
    href: "https://github.com/Remy2404",
    badge: "45+ repos",
    tone: "from-slate-900 to-slate-700",
  },
  {
    label: "Portfolio",
    value: "phon-ramy-five.vercel.app",
    icon: Globe,
    href: "https://phon-ramy-five.vercel.app/",
    badge: "Live demos",
    tone: "from-blue-500 to-blue-600",
  },
  {
    label: "Certification",
    value: "Spring Internship Top Performer",
    icon: Award,
    tone: "from-emerald-500 to-emerald-600",
  },
  {
    label: "Resume PDF",
    value: "Request latest copy",
    icon: LinkIcon,
    href: "mailto:rosexmee1122@gmail.com",
    badge: "Email",
    tone: "from-indigo-500 to-indigo-600",
  },
];

const achievements = [
  {
    metric: "25%",
    label: "Faster dashboards",
    detail: "API query tuning during Spring internship",
    color: "from-blue-50 to-blue-100 text-blue-700",
  },
  {
    metric: "6 hrs/wk",
    label: "Support time saved",
    detail: "Automation bots deployed for community team",
    color: "from-emerald-50 to-emerald-100 text-emerald-700",
  },
  {
    metric: "120+",
    label: "Weekly AI users",
    detail: "Polymind assistant adoption",
    color: "from-purple-50 to-purple-100 text-purple-700",
  },
  {
    metric: "40%",
    label: "Budgeting time cut",
    detail: "Financial Compass pilot results",
    color: "from-amber-50 to-amber-100 text-amber-700",
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-100 print:bg-white py-10 print:py-0">
      <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none print:max-w-full">
        {/* Header */}
        <header className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-8 print:p-6">
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="relative mx-auto lg:mx-0">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/cover.png"
                  alt="Phon Ramy profile photo"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <span className="absolute -bottom-2 -right-2 inline-flex items-center justify-center w-8 h-8 rounded-full border-4 border-slate-900 bg-emerald-500">
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                Phon Ramy
              </h1>
              <p className="mt-1 text-lg font-medium text-blue-200">
                Junior Full-Stack Developer · AI Product Builder
              </p>
              <p className="mt-4 text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                4th-year IT student delivering AI-enabled web and mobile products with
                practical impact. Over 45 GitHub repositories, 15+ shipped projects,
                and hands-on experience reducing load times, automating workflows,
                and shipping polished user experiences.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <MapPin size={16} className="text-blue-200" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Phone size={16} className="text-blue-200" />
                  <a href="tel:+855962064081" className="hover:text-blue-100">
                    +855 96 206 4081
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Mail size={16} className="text-blue-200" />
                  <a
                    href="mailto:rosexmee1122@gmail.com"
                    className="hover:text-blue-100"
                  >
                    rosexmee1122@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Github size={16} className="text-blue-200" />
                  <a
                    href="https://github.com/Remy2404"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-100"
                  >
                    github.com/Remy2404
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-8 print:p-6 space-y-12">
          {/* Professional Summary */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-blue-600" size={26} />
              <h2 className="text-2xl font-semibold text-gray-900">
                Professional Summary
              </h2>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <p className="text-gray-700 text-base leading-relaxed">
                Full-stack developer blending <strong>2+ years of project-based delivery</strong>
                with a <strong>final-year BSc in IT</strong>. I specialise in modern JavaScript, AI
                integrations, and automation that measurably improves product velocity—
                from <strong>cutting dashboard load times by 25%</strong> to <strong>saving 6 hours of support</strong>
                effort every week. I thrive in collaborative, fast-learning environments
                and back up decisions with data, version control, and sensible design systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((item) => (
                <div
                  key={item.metric}
                  className={`rounded-xl border border-gray-200 bg-gradient-to-br ${item.color} p-4 shadow-sm`}
                >
                  <div className="text-2xl font-bold">{item.metric}</div>
                  <div className="text-sm font-semibold text-slate-900">
                    {item.label}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-snug">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Skills */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Code className="text-blue-600" size={26} />
              <h2 className="text-2xl font-semibold text-gray-900">
                Core Skills & Technologies
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className={`rounded-2xl border bg-gradient-to-br ${group.gradient} p-5`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <group.icon className="text-gray-700" size={24} />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {group.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-600">
                          {group.level} proficiency
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                      {group.badges.length} skills
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Rocket className="text-blue-600" size={26} />
              <h2 className="text-2xl font-semibold text-gray-900">
                Work Experience
              </h2>
            </div>
            <div className="space-y-6">
              {experience.map((item) => (
                <article
                  key={`${item.role}-${item.company}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <header className="flex flex-col gap-3 border-b border-gray-100 pb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-blue-600">
                        {item.company}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">{item.summary}</p>
                    </div>
                    <div className="text-sm text-right text-gray-500">
                      <div className="font-medium text-gray-700">{item.period}</div>
                      <div>{item.location}</div>
                    </div>
                  </header>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
                    {item.results.map((result) => (
                      <li key={result} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Brain className="text-blue-600" size={26} />
              <h2 className="text-2xl font-semibold text-gray-900">
                Key Projects
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-wide text-purple-600">
                        {project.caption}
                      </p>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      View
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                    {project.summary}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
                    {project.results.map((result) => (
                      <li key={result} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-purple-500" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <Award className="text-blue-600" size={26} />
              <h2 className="text-2xl font-semibold text-gray-900">
                Education
              </h2>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    BSc Information Technology (IT Engineering)
                  </h3>
                  <p className="text-sm font-medium text-blue-600">
                    Royal University of Phnom Penh · Expected 2025
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Coursework: Data Structures & Algorithms, Database Design,
                    Web Engineering, Mobile Development, AI Fundamentals.
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  <div className="font-medium text-gray-700">GPA: 3.6/4.0</div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements & Links */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <LinkIcon className="text-blue-600" size={26} />
              <h2 className="text-2xl font-semibold text-gray-900">
                Achievements & Links
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? "#"}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noreferrer" : undefined}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r ${item.tone} p-4 text-white transition-shadow hover:shadow-md ${item.href ? "" : "pointer-events-none opacity-90"}`}
                >
                  <item.icon className="h-5 w-5 text-white/80" />
                  <div className="mt-3 text-sm font-semibold uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="text-xs text-white/90">{item.value}</div>
                  {item.badge && (
                    <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-200 px-8 py-6 text-center text-xs text-gray-500 print:px-6">
          <p>
            Crafted with Next.js & Tailwind CSS · Updated {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}
