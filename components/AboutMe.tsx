import { Sparkles } from "lucide-react";

const highlights = [
  "Cut dashboard load times by 25% during Spring Internship through smart API tuning.",
  "Ship AI-driven side projects used by 120+ weekly learners and makers.",
  "Maintain 45+ GitHub repositories with automated testing and release notes.",
];

const AboutMeSection = () => {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <header className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-cyan-100 text-emerald-600">
          <Sparkles className="h-6 w-6" />
        </span>
        <div>
          <h2 className="font-serif text-xl font-bold uppercase tracking-wider text-gray-900">
            About Me
          </h2>
          <p className="text-sm font-medium text-emerald-600">
            Practical builder • AI enthusiast • Team collaborator
          </p>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-gray-700">
        Full-stack developer and 4th-year IT student who enjoys turning ideas into real, measurable outcomes. I focus on automated workflows, fast user interfaces, and AI-powered experiences that help people make decisions faster.
      </p>

      <ul className="mt-5 space-y-2 text-sm text-gray-700">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMeSection;
