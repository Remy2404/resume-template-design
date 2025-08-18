import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center border-b-2 border-gray-200 pb-6">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <Image
                src="/cover.png"
                alt="Phon Ramy Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-gray-900 mb-2">PHON RAMY</h1>
          <p className="font-serif font-semibold text-xl text-blue-600 mb-4">FULL-STACK DEVELOPER</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
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
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/Remy2404"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-red-500 transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/phon-ramy-81025a2a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-red-500 transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://phon-ramy-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-red-500 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Portfolio</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-gray-900 border-b border-gray-300 pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              Accomplished final-year IT Engineering student with 3+ years of hands-on experience in full-stack
              development and AI integration. Successfully architected and deployed 10+ web and mobile applications,
              serving over 3,000 active users. Demonstrated expertise in integrating 50+ AI models to enhance
              application intelligence and user experience. Seeking an internship opportunity to contribute to
              innovative projects while expanding technical expertise in a collaborative environment.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-gray-900 border-b border-gray-300 pb-2">
            TECHNICAL SKILLS
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Expert Level
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Languages & Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript/JavaScript", "React.js", "Next.js", "Python"].map((skill) => (
                      <Badge key={skill} className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">AI/ML & Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {["OpenAI API", "Google Gemini", "Node.js", "Express.js"].map((skill) => (
                      <Badge key={skill} className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-green-600 mb-3">Proficient</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Databases & Mobile</p>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "PostgreSQL", "React Native", "Firebase"].map((skill) => (
                      <Badge key={skill} className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">DevOps & Cloud</p>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "AWS", "Vercel", "GitHub Actions"].map((skill) => (
                      <Badge key={skill} className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-orange-600 mb-3">Familiar</h3>
              <div className="flex flex-wrap gap-2">
                {["C++", "Java", "MySQL", "Supabase", "Android (Java/Kotlin)", "LangChain", "Heroku"].map((skill) => (
                  <Badge key={skill} className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-gray-900 border-b border-gray-300 pb-2">
            PROJECT EXPERIENCE
          </h2>
          <div className="space-y-6">
            {/* Gemini AI Web Chatbot */}
            <div className="border-l-4 border-blue-600 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Polymind - Multi-Modal AI Telegram Bot</h3>
                <span className="text-sm text-gray-500 font-medium">2023 - Present</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1 text-green-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">3,000+ Active Users</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">99.9% Uptime</span>
                </div>
              </div>
              <ul className="text-gray-700 space-y-1 mb-3">
                <li>• Architected advanced AI assistant integrating 50+ models (Gemini, DeepSeek, OpenRouter)</li>
                <li>• Engineered multi-model routing system achieving sub-second response times</li>
                <li>• Implemented robust context management reducing memory usage by 35%</li>
                <li>• Deployed scalable infrastructure supporting 3,000+ concurrent users</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Python", "Telegram Bot API", "Docker", "Heroku", "Whisper", "FFmpeg"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            {/* Coffee Corner Mobile App */}
            <div className="border-l-4 border-blue-600 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  Coffee Corner Mobile App | React Native Developer
                </h3>
                <span className="text-sm text-gray-500 font-medium">2023 - Present</span>
              </div>
              <ul className="text-gray-700 space-y-1 mb-3">
                <li>• Developed cross-platform mobile application for local coffee shop operations</li>
                <li>• Implemented order tracking system reducing customer wait times by 25%</li>
                <li>• Designed points-based loyalty system increasing customer retention by 45%</li>
                <li>• Integrated push notifications improving order completion rates by 30%</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["React Native", "MongoDB", "TypeScript", "Expo Go"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            {/* Gemini AI Web Chatbot */}
            <div className="border-l-4 border-blue-600 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Gemini AI Web Chatbot | Full-Stack Developer</h3>
                <span className="text-sm text-gray-500 font-medium">2022 - Present</span>
              </div>
              <ul className="text-gray-700 space-y-1 mb-3">
                <li>• Developed modern web-based AI chatbot with responsive React interface</li>
                <li>• Implemented Node.js backend with Google AI integration and session management</li>
                <li>• Optimized real-time messaging performance, reducing latency by 40%</li>
                <li>• Built context-aware conversation system improving user engagement by 60%</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "Google AI Platform"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-gray-900 border-b border-gray-300 pb-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="border-l-4 border-blue-600 pl-6 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-semibold text-lg text-gray-900">Open-Source Contributor</h3>
              <span className="text-sm text-gray-500 font-medium">2023 - Present</span>
            </div>
            <p className="text-blue-600 font-medium mb-2">KhmerCoder Community</p>
            <ul className="text-gray-700 space-y-1">
              <li>• Collaborated with 500+ developers in Cambodia's largest developer community</li>
              <li>• Contributed to 15+ open-source projects using modern technology stacks</li>
              <li>• Mentored junior developers in full-stack development best practices</li>
              <li>• Maintained web applications serving 1,000+ community members</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-gray-900 border-b border-gray-300 pb-2">EDUCATION</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Bachelor of IT Engineering</h3>
                <span className="text-sm text-gray-500 font-medium">Expected Graduation: 2026</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">Royal University of Phnom Penh | Phnom Penh, Cambodia</p>
              <p className="text-gray-700 text-sm">
                <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Software
                Engineering, Object-Oriented Programming
              </p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <h3 className="font-semibold text-lg text-gray-900">High School Diploma</h3>
              <p className="text-blue-600 font-medium">Chea Sim Samaki High School | Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-gray-900 border-b border-gray-300 pb-2">
            ADDITIONAL INFORMATION
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Languages</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• English (Fluent)</li>
                <li>• Khmer (Native)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Community Involvement</h3>
              <p className="text-gray-700 text-sm">
                Active member and contributor to KhmerCoder, Cambodia's largest developer community with 10,000+
                members.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Interests & Certifications</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• AI/ML Technology Research</li>
                <li>• Open-Source Contributions</li>
                <li>• Competitive Programming</li>
                <li>• Tech Community Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
