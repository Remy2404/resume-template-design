'use client'

import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, TrendingUp, Users, Zap, Download, Star, Calendar, Globe } from "lucide-react"
import Image from "next/image"
import AboutMeSection from "@/components/AboutMe"
import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto space-y-6 print:space-y-4">
        {/* Header Section */}
        <div className="text-center border-b-2 border-gray-300 pb-6">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-400">
              <Image
                src="/cover.png"
                alt="Phon Ramy Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="font-serif font-black text-3xl md:text-4xl text-gray-900 mb-2">
            PHON RAMY
          </h1>
          <p className="font-serif font-semibold text-lg text-gray-700 mb-4">FULL-STACK DEVELOPER</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Phnom Penh, Cambodia
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +855 96 206 4081
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              rosexmee1122@gmail.com
            </div>
          </div>

          <div className="flex justify-center gap-6 text-sm">
            <a
              href="https://github.com/Remy2404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/phon-ramy-81025a2a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              LinkedIn
            </a>
            <a
              href="https://phon-ramy-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Portfolio
            </a>
          </div>
        </div>

        <AboutMeSection />

        {/* Skills Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Technical Skills
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Expert Level</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-3">Languages & Frontend</p>
                  <div className="space-y-3">
                    {[
                      { skill: "TypeScript/JavaScript", level: 95 },
                      { skill: "React.js", level: 90 },
                      { skill: "Next.js", level: 88 },
                      { skill: "Python", level: 85 }
                    ].map(({ skill, level }) => (
                      <div key={skill} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill}</span>
                          <span className="text-gray-500">{level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div
                            className="bg-gray-600 h-2"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-3">AI/ML & Backend</p>
                  <div className="space-y-3">
                    {[
                      { skill: "OpenAI API", level: 92 },
                      { skill: "Google Gemini", level: 90 },
                      { skill: "Node.js", level: 88 },
                      { skill: "Express.js", level: 85 }
                    ].map(({ skill, level }) => (
                      <div key={skill} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill}</span>
                          <span className="text-gray-500">{level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div
                            className="bg-gray-600 h-2"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Proficient</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Databases & Mobile</p>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "PostgreSQL", "React Native", "Firebase"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">DevOps & Cloud</p>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "AWS", "Vercel", "GitHub Actions"].map((skill) => (
                      <span key={skill} className="text-sm text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Familiar</h3>
              <div className="flex flex-wrap gap-2">
                {["C++", "Java", "MySQL", "Supabase", "Android (Java/Kotlin)", "LangChain", "Heroku"].map((skill) => (
                  <span key={skill} className="text-sm text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Project Experience
          </h2>
          <div className="space-y-6">
            {/* Polymind AI Telegram Bot */}
            <div className="pl-6 relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h3 className="font-semibold text-lg text-gray-900">Polymind - Multi-Modal AI Telegram Bot</h3>
                <span className="text-sm text-gray-500 font-medium">2023 - Present</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-gray-700">3,000+ Active Users</span>
                <span className="text-sm font-medium text-gray-700">99.9% Uptime</span>
              </div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Architected advanced AI assistant integrating 50+ models (Gemini, DeepSeek, OpenRouter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Engineered multi-model routing system achieving sub-second response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Implemented robust context management reducing memory usage by 35%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Deployed scalable infrastructure supporting 3,000+ concurrent users</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Python", "Telegram Bot API", "Docker", "Heroku", "Whisper", "FFmpeg"].map((tech) => (
                  <span key={tech} className="text-xs text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Coffee Corner Mobile App */}
            <div className="pl-6 relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h3 className="font-semibold text-lg text-gray-900">
                  Coffee Corner Mobile App | React Native Developer
                </h3>
                <span className="text-sm text-gray-500 font-medium">2023 - Present</span>
              </div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Developed cross-platform mobile application for local coffee shop operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Implemented order tracking system reducing customer wait times by 25%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Designed points-based loyalty system increasing customer retention by 45%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Integrated push notifications improving order completion rates by 30%</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["React Native", "MongoDB", "TypeScript", "Expo Go"].map((tech) => (
                  <span key={tech} className="text-xs text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Gemini AI Web Chatbot */}
            <div className="pl-6 relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h3 className="font-semibold text-lg text-gray-900">Gemini AI Web Chatbot | Full-Stack Developer</h3>
                <span className="text-sm text-gray-500 font-medium">2022 - Present</span>
              </div>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Developed modern web-based AI chatbot with responsive React interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Implemented Node.js backend with Google AI integration and session management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optimized real-time messaging performance, reducing latency by 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Built context-aware conversation system improving user engagement by 60%</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "Google AI Platform"].map((tech) => (
                  <span key={tech} className="text-xs text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">Professional Experience</h2>
          <div className="pl-6 relative">
            <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-600 rounded-full"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-semibold text-lg text-gray-900">Open-Source Contributor</h3>
              <span className="text-sm text-gray-500 font-medium">2023 - Present</span>
            </div>
            <p className="text-gray-800 font-medium mb-3">KhmerCoder Community</p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Collaborated with 500+ developers in Cambodia's largest developer community</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Contributed to 15+ open-source projects using modern technology stacks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Mentored junior developers in full-stack development best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Maintained web applications serving 1,000+ community members</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">Education</h2>
          <div className="space-y-4">
            <div className="pl-6 relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Bachelor of IT Engineering</h3>
              </div>
              <p className="text-gray-800 font-medium mb-2">Royal University of Phnom Penh | Phnom Penh, Cambodia</p>
              <p className="text-gray-700 text-sm">
                <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Software
                Engineering, Object-Oriented Programming
              </p>
            </div>

            <div className="pl-6 relative">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-600 rounded-full"></div>
              <h3 className="font-semibold text-lg text-gray-900">High School Diploma</h3>
              <p className="text-gray-800 font-medium">Chea Sim Samaki High School | Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Additional Information
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• English (Fluent)</li>
                <li>• Khmer (Native)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Community Involvement</h3>
              <p className="text-gray-700 text-sm">
                Active member and contributor to KhmerCoder, Cambodia's largest developer community with 10,000+
                members.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Interests & Certifications</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• AI/ML Technology Research</li>
                <li>• Open-Source Contributions</li>
                <li>• Competitive Programming</li>
                <li>• Tech Community Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 no-print">
          <p className="text-gray-600 mb-4">
            I'm always excited to collaborate on challenging projects involving AI/ML, full-stack development, or innovative mobile solutions.
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="mailto:rosexmee1122@gmail.com"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Get In Touch
            </a>
            <button
              className="text-gray-600 hover:text-gray-900 underline"
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
          <div className="text-sm text-gray-500">
            © 2025 Phon Ramy • Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  )
}
