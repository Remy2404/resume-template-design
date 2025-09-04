import { Code } from "lucide-react"

const AboutMeSection = () => {
  return (
    <div className="border-b border-gray-200 pb-8 hover:shadow-sm transition-shadow duration-300">
      <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 uppercase tracking-wider relative">
        <span className="inline-block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          About Me
        </span>
        <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
      </h2>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Code className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed text-lg">
              Full-Stack Developer with experience building AI-powered web and mobile applications. Skilled in React/Next.js, Node.js, Python, and React Native, with a focus on creating fast, scalable, and user-friendly solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Passionate about delivering high-quality code and working on projects that make real impact. Always eager to learn new technologies and tackle challenging problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;