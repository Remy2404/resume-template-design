'use client'
import Image from "next/image"
import AboutMeSection from "@/components/AboutMe"
import { Mail, Phone, Github, Globe, Code } from "lucide-react"

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto space-y-8 print:space-y-6">
        {/* Header Section */}
        <div className="text-center border-b-2 border-gradient-to-r from-blue-200 to-purple-200 pb-8 mb-8">
          <div className="flex justify-center mb-8">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-blue-100">
              <Image
                src="/cover.png"
                alt="Phon Ramy Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-gray-900 mb-3 tracking-tight">
            PHON RAMY
          </h1>
          <p className="font-serif font-semibold text-xl text-blue-600 mb-6 uppercase tracking-wider">
            Full-Stack Developer
          </p>

          <div className="text-sm text-gray-600 mb-6 bg-gray-50 rounded-lg p-4 inline-block">
            Phnom Penh, Cambodia | +855 96 206 4081 | rosexmee1122@gmail.com |{' '}
            <a
              href="https://github.com/Remy2404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            >
              GitHub
            </a>{' '}
            |{' '}
            <a
              href="https://phon-ramy-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            >
              Portfolio
            </a>{' '}
            |{' '}
            <a
              href="https://khmercoder.com/teams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            >
              KhmerCoder
            </a>
          </div>
        </div>

        <AboutMeSection />

        {/* Technical Skills Section */}
        <div className="border-b border-gray-200 pb-8 hover:shadow-sm transition-shadow duration-300">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 uppercase tracking-wider relative">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <strong className="text-gray-800 font-semibold text-lg">Frontend:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                    <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <strong className="text-gray-800 font-semibold text-lg">Backend:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Node.js & Express.js',  'Python', 'C++', 'JavaScript','Typescript', 'PHP', 'Java'].map((skill) => (
                    <span key={skill} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <strong className="text-gray-800 font-semibold text-lg">Databases:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['MongoDB', 'MySQL', 'Supabase', 'PostgreSQL', 'SQLite'].map((skill) => (
                    <span key={skill} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <strong className="text-gray-800 font-semibold text-lg">Tools & Platforms:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Git', 'Docker', 'Vercel', 'Render', 'Railway'].map((skill) => (
                    <span key={skill} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="border-b border-gray-200 pb-8 hover:shadow-sm transition-shadow duration-300">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 uppercase tracking-wider relative">
            <span className="inline-block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-green-600 to-teal-600"></div>
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="font-semibold text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                  Full-Stack Developer (Freelance)
                </h3>
                <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full mt-2 md:mt-0">
                  Phnom Penh, Cambodia | 2023 – Present
                </span>
              </div>
              <ul className="text-gray-700 space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">▸</span>
                  <span>Built AI-powered chat assistant with sub-second response times using multi-model architecture and efficient context routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">▸</span>
                  <span>Developed cross-platform e-commerce mobile app reducing delivery wait times by 40%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">▸</span>
                  <span>Created APIs for real-time data processing and integrated payment gateways for seamless transactions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="font-semibold text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                  Software Development Contributor
                </h3>
                <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full mt-2 md:mt-0">
                  KhmerCoder Community, Phnom Penh, Cambodia | 2022
                </span>
              </div>
              <ul className="text-gray-700 space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">▸</span>
                  <span>Assisted in building internal tools for data tracking and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 flex-shrink-0">▸</span>
                  <span>Improved application performance by optimizing API calls, reducing load time by 25%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="border-b border-gray-200 pb-8 hover:shadow-sm transition-shadow duration-300">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 uppercase tracking-wider relative">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-200">
                      AI Assistant Platform
                    </strong>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Multi-model AI chatbot with real-time responses for web and mobile platforms
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 font-semibold text-lg group-hover:text-green-700 transition-colors duration-200">
                      Food Ordering Website
                    </strong>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Full-stack app with user-friendly ordering interface and secure payment system
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 font-semibold text-lg group-hover:text-purple-700 transition-colors duration-200">
                      E-commerce Mobile App
                    </strong>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      React Native app integrating real-time tracking and customer notifications
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 font-semibold text-lg group-hover:text-pink-700 transition-colors duration-200">
                      Idea to Stack
                    </strong>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      AI-powered tool that transforms app ideas into detailed full-stack coding prompts with React 19, TypeScript, and glassmorphism UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="border-b border-gray-200 pb-8 hover:shadow-sm transition-shadow duration-300">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 uppercase tracking-wider relative">
            <span className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Education
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600"></div>
          </h2>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h3 className="font-semibold text-xl text-gray-900">Bachelor's in Information Technology</h3>
              <span className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0">
                Royal University of Phnom Penh, Phnom Penh | 2022 – 2025
              </span>
            </div>
            <p className="text-gray-600 mt-3">
              Focused on software development, database management, and modern web technologies
            </p>
          </div>
        </div>

        {/* Languages Section */}
        <div className="border-b border-gray-200 pb-8 hover:shadow-sm transition-shadow duration-300">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 uppercase tracking-wider relative">
            <span className="inline-block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Languages
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-orange-600 to-red-600"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-center mb-2">
                <strong className="text-gray-800 font-semibold">English</strong>
                <span className="text-sm text-gray-500 bg-orange-50 px-2 py-1 rounded">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-center mb-2">
                <strong className="text-gray-800 font-semibold">Khmer</strong>
                <span className="text-sm text-gray-500 bg-red-50 px-2 py-1 rounded">Native</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-b border-gray-200 pb-8 hover:shadow-sm transition-shadow duration-300">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 uppercase tracking-wider relative">
            <span className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Contact Info
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <strong className="text-gray-800 font-semibold">Email</strong>
                    <p className="text-gray-600 text-sm">rosexmee1122@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <strong className="text-gray-800 font-semibold">Phone</strong>
                    <p className="text-gray-600 text-sm">+855 96 206 4081</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Github className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <strong className="text-gray-800 font-semibold">GitHub</strong>
                    <a
                      href="https://github.com/Remy2404"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200 block text-sm"
                    >
                      github.com/Remy2404
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <strong className="text-gray-800 font-semibold">Portfolio</strong>
                    <a
                      href="https://phon-ramy-five.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200 block text-sm"
                    >
                      phon-ramy-five.vercel.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 no-print">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-6">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              I'm always excited to collaborate on challenging projects involving AI/ML, full-stack development, or innovative mobile solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="mailto:rosexmee1122@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => {
                  // Add print-specific styles before printing
                  const style = document.createElement('style');
                  style.textContent = `
                    @media print {
                      body { background: white !important; }
                      .no-print { display: none !important; }
                      * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
                    }
                  `;
                  document.head.appendChild(style);
                  window.print();
                  // Clean up after printing
                  setTimeout(() => document.head.removeChild(style), 1000);
                }}
              >
                Print Resume
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-500 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            © 2025 Phon Ramy • Built with ❤️ by Ramy powered by Next.js & Tailwind CSS • Modern CV Template
          </div>
        </div>
      </div>
    </div>
  )
}
