'use client'
import Image from "next/image"
import { Mail, Phone, MapPin, Github, Globe, Award, Calendar, Users, TrendingUp, Code, Database, Smartphone, Brain, Settings } from "lucide-react"

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 print:bg-white">
      {/* Page 1 - Header & Professional Summary */}
      <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none print:max-w-full">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-8 print:p-6">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/cover.png"
                    alt="Phon Ramy Profile"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                  PHON RAMY
                </h1>
                <p className="text-2xl font-light text-blue-200 mb-4 tracking-wide">
                  Junior Full-Stack Developer
                </p>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                  Enthusiastic Junior Full-Stack Developer and 4th-year IT student with hands-on experience in 
                  modern web technologies and AI integration. Passionate about learning new technologies and 
                  building innovative solutions through personal projects and internships.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-300" />
                    <span>Phnom Penh, Cambodia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-300" />
                    <span>+855 96 206 4081</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-300" />
                    <a href="mailto:rosexmee1122@gmail.com" className="hover:text-blue-200 transition-colors">
                      rosexmee1122@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github size={16} className="text-blue-300" />
                    <a href="https://github.com/Remy2404" target="_blank" className="hover:text-blue-200 transition-colors">
                      github.com/Remy2404
                    </a>
                  </div>
                  <div className="flex items-center gap-2 md:col-span-2">
                    <Globe size={16} className="text-blue-300" />
                    <a href="https://phon-ramy-five.vercel.app/" target="_blank" className="hover:text-blue-200 transition-colors">
                      phon-ramy-five.vercel.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="p-8 print:p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <TrendingUp className="text-blue-600" size={28} />
              Professional Summary
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl border-l-4 border-blue-600">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                <strong>Motivated Junior Full-Stack Developer</strong> and 4th-year IT student with 2+ years of hands-on experience 
                building web and mobile applications through personal projects and internships. 
                Specialized in <strong>modern JavaScript frameworks, AI integration, and responsive web design</strong>. Successfully completed 
                15+ personal projects including AI chatbots, web applications, and mobile apps, demonstrating strong learning ability and technical growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">45+</div>
                  <div className="text-sm text-gray-600">GitHub Repositories</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Personal Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">2+</div>
                  <div className="text-sm text-gray-600">Years Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-blue-600" size={28} />
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-blue-600" size={24} />
                  <h3 className="font-semibold text-gray-900">Frontend</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• React.js & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vue.js & Angular</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-green-600" size={24} />
                  <h3 className="font-semibold text-gray-900">Backend</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Node.js & Express</li>
                  <li>• Python & Django</li>
                  <li>• PHP & Laravel</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="text-purple-600" size={24} />
                  <h3 className="font-semibold text-gray-900">Mobile</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• React Native</li>
                  <li>• Expo</li>
                  <li>• Cross-platform UI</li>
                  <li>• Native Features</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="text-orange-600" size={24} />
                  <h3 className="font-semibold text-gray-900">AI/ML</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Multi-model AI</li>
                  <li>• Gemini & OpenAI</li>
                  <li>• Voice Processing</li>
                  <li>• Image Analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Settings className="text-blue-600" size={28} />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'Kotlin'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Vue.js', 'Angular', 'Express.js', 'Laravel', 'Django'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Vercel', 'Docker', 'Git', 'GitHub Actions'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">AI & Integration</h4>
                  <div className="flex flex-wrap gap-2">
                    {['OpenAI API', 'Gemini AI', 'Telegram Bot API', 'Webhook Integration'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {['VS Code', 'Figma', 'Postman', 'Jupyter Notebook'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Break */}
      <div className="print:break-before-page"></div>

      {/* Page 2 - Professional Experience & Major Projects */}
      <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none print:max-w-full mt-8 print:mt-0">
        <div className="p-8 print:p-6">
          
          {/* Professional Experience */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calendar className="text-blue-600" size={28} />
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {/* Current Role */}
                <div className="relative pl-8 border-l-4 border-blue-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Junior Full-Stack Developer</h3>
                      <p className="text-lg text-blue-600 font-semibold">Personal Projects & Learning</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                        2023 – Present
                      </span>
                      <p className="text-sm text-gray-500 mt-1">Self-Directed Learning</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Learning Achievements</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Built 15+ full-stack applications</li>
                        <li>• Learned modern JavaScript frameworks</li>
                        <li>• Integrated AI APIs in personal projects</li>
                        <li>• Developed mobile apps with React Native</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Learned</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• React.js, Next.js, TypeScript</li>
                        <li>• Node.js, Python, PHP</li>
                        <li>• MongoDB, MySQL</li>
                        <li>• AI APIs, REST, WebSocket</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Built Polymind AI Platform:</strong> Self-taught and developed a sophisticated multi-modal Telegram bot leveraging 50+ AI models including Gemini, DeepSeek, and OpenRouter, gaining hands-on experience with AI integration and real-time processing.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Created Multiple Web Applications:</strong> Independently developed various full-stack projects including e-commerce platforms, portfolio websites, and financial management tools, demonstrating rapid learning and problem-solving abilities.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Continuous Learning & Growth:</strong> Actively learning new technologies through online courses, documentation, and hands-on projects, maintaining a consistent GitHub presence with regular contributions and project updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>              {/* Spring Internship Program */}
              <div className="relative pl-8 border-l-4 border-green-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                <div className="bg-gradient-to-r from-green-50 to-slate-50 p-6 rounded-xl">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Spring Internship Program</h3>
                      <p className="text-lg text-green-600 font-semibold">Marketing, Sales & Software Development Intern</p>
                      <p className="text-base text-gray-600">Spring Education Center</p>
                      <p className="text-sm text-green-700 font-medium mt-1">🏆 Top Performer - Selected among top interns from 100+ participants across 4 batches</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                        Spring 2023 (1 Month Intensive)
                      </span>
                      <p className="text-sm text-gray-500 mt-1">Phnom Penh, Cambodia</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Program Achievements</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 🎖️ Completion certificate earned</li>
                        <li>• 🎓 Language scholarship awarded</li>
                        <li>• 📝 Recommendation letter received</li>
                        <li>• 🏅 Top intern recognition</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Skills Developed</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Marketing & sales fundamentals</li>
                        <li>• Software development practices</li>
                        <li>• Project management</li>
                        <li>• Communication & teamwork</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Intensive Multi-Disciplinary Training:</strong> Participated in a comprehensive one-month program covering marketing, sales, and software development, gaining valuable exposure to business and technical aspects of the tech industry.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>KhmerCoder Community Collaboration:</strong> Worked with KhmerCoder Community to build and enhance digital platforms using React.js, TypeScript, and Node.js within an Agile team environment, gaining real-world development experience.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Bot Development & Deployment:</strong> Developed and deployed Telegram and Discord bots for community engagement, implementing automated responses and user management features, showcasing API integration skills.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Performance Optimization:</strong> Optimized backend performance by refining API calls and database queries, achieving a 25% improvement in application load times through systematic code review and optimization.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">
                        <strong>Professional Development:</strong> Attended weekly training sessions and received mentorship on technical and soft skills, including project management, communication, and teamwork, establishing a strong foundation for professional growth.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800 font-medium">
                      <span className="font-semibold">Outstanding Recognition:</span> Selected as one of the top interns among 100+ participants across four batches during the Spring Internship Program's certification ceremony, demonstrating exceptional performance and dedication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Code className="text-blue-600" size={28} />
              Featured Projects
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Polymind Project */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Polymind AI Platform</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">AI/ML</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Telegram Bot</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">7 ⭐</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  A powerful, multi-modal Telegram bot leveraging cutting-edge AI technologies including Gemini, DeepSeek, OpenRouter, and 50+ AI models. 
                  This personal project showcases my ability to integrate multiple APIs and handle real-time processing as a self-taught developer.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Tech Stack:</span>
                    <span className="text-gray-700">Python, AI APIs, Telegram Bot API, WebHooks</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Features:</span>
                    <span className="text-gray-700">Voice processing, Image analysis, Multi-model AI, PDF processing</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/Remy2404/Polymind" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View on GitHub →
                  </a>
                </div>
              </div>

              {/* Apsara AI Project */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Apsara AI Platform</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">AI Platform</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">TypeScript</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">2 ⭐</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  An Advanced Intelligent AI-Powered Application Platform that I built to practice modern web development and AI integration. 
                  This project demonstrates my learning progress in TypeScript and advanced React patterns.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Tech Stack:</span>
                    <span className="text-gray-700">TypeScript, React, Next.js, AI Integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Features:</span>
                    <span className="text-gray-700">AI chat interface, Real-time processing, Scalable architecture</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/Remy2404/apsara-ai" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View on GitHub →
                  </a>
                </div>
              </div>

              {/* E-commerce API */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce API System</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Backend</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">PHP</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">1 ⭐</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Comprehensive e-commerce backend API system with secure authentication, payment processing, inventory management, and order tracking capabilities.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Tech Stack:</span>
                    <span className="text-gray-700">PHP, MySQL, RESTful API, JWT Authentication</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Features:</span>
                    <span className="text-gray-700">Payment gateway, Order management, User authentication</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/Remy2404/ecommerce-api" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View on GitHub →
                  </a>
                </div>
              </div>

              {/* Financial App */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Management App</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">FinTech</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">TypeScript</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Full-stack financial management application with expense tracking, budget planning, financial analytics, and real-time data visualization.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Tech Stack:</span>
                    <span className="text-gray-700">TypeScript, React, Node.js, Chart.js</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-900">Features:</span>
                    <span className="text-gray-700">Expense tracking, Budget analytics, Data visualization</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/Remy2404/financial-app" target="_blank" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notable Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "React Native Course App", tech: "React Native, Expo", stars: "1 ⭐", desc: "Mobile learning platform" },
                { name: "Vue.js Course Platform", tech: "Vue.js, JavaScript", desc: "Interactive learning system" },
                { name: "AI Resume Analyzer", tech: "JavaScript, AI APIs", desc: "CV analysis tool" },
                { name: "Portfolio Website", tech: "TypeScript, Next.js", stars: "1 ⭐", desc: "Personal showcase site" },
                { name: "Image Processing Lab", tech: "Jupyter, Python", stars: "2 ⭐", desc: "Computer vision projects" },
                { name: "Gemini AI Chatbot", tech: "JavaScript, Gemini API", stars: "2 ⭐", desc: "AI conversation bot" }
              ].map((project, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-1">{project.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.tech}</span>
                    {project.stars && <span className="text-xs text-yellow-600">{project.stars}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Page Break */}
      <div className="print:break-before-page"></div>

      {/* Page 3 - Education, Certifications & Additional Information */}
      <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none print:max-w-full mt-8 print:mt-0">
        <div className="p-8 print:p-6">
          
          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-blue-600" size={28} />
              Education & Certifications
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Bachelor of Information Technology</h3>
                    <p className="text-lg text-blue-600 font-semibold">Royal University of Phnom Penh</p>
                    <p className="text-gray-600">Major: Software Engineering & Web Development</p>
                    <p className="text-sm text-gray-500 mt-1">Currently in 4th Year</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                      2022 – 2025 (Expected)
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Phnom Penh, Cambodia</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Database Design & Implementation</li>
                      <li>• Web Development Technologies</li>
                      <li>• Mobile Application Development</li>
                      <li>• Software Engineering Principles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Projects</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Coffee Corner Management System (Java)</li>
                      <li>• Mobile App Development Lab (Android)</li>
                      <li>• Web Technologies PHP Lab</li>
                      <li>• Image Processing with Jupyter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Achievements */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-blue-600" size={28} />
              Technical Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">GitHub Repositories</div>
                <div className="text-xs text-gray-600">Active open-source contributor</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">GitHub Stars</div>
                <div className="text-xs text-gray-600">Community recognition</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Followers</div>
                <div className="text-xs text-gray-600">Professional network</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">Languages</div>
                <div className="text-xs text-gray-600">Programming languages</div>
              </div>
            </div>
          </div>

          {/* Languages & Communication */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="text-blue-600" size={28} />
              Languages & Communication
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Spoken Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Khmer (Native)</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-3 h-3 bg-green-500 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">English (Professional)</span>
                    <div className="flex gap-1">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      ))}
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Problem Solving', 'Team Collaboration', 'Critical Thinking', 'Project Management',
                    'Client Communication', 'Agile Methodology', 'Code Review', 'Mentoring'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Mail className="text-blue-600" size={28} />
              Contact & Professional Links
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="mailto:rosexmee1122@gmail.com" className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border border-red-200 hover:shadow-md transition-shadow">
                <Mail className="text-red-600" size={20} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Email</div>
                  <div className="text-xs text-gray-600">rosexmee1122@gmail.com</div>
                </div>
              </a>
              
              <a href="tel:+85596206408" className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                <Phone className="text-green-600" size={20} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Phone</div>
                  <div className="text-xs text-gray-600">+855 96 206 4081</div>
                </div>
              </a>
              
              <a href="https://github.com/Remy2404" target="_blank" className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                <Github className="text-gray-600" size={20} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">GitHub</div>
                  <div className="text-xs text-gray-600">github.com/Remy2404</div>
                </div>
              </a>
              
              <a href="https://phon-ramy-five.vercel.app/" target="_blank" className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow">
                <Globe className="text-blue-600" size={20} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Portfolio</div>
                  <div className="text-xs text-gray-600">phon-ramy-five.vercel.app</div>
                </div>
              </a>
            </div>
          </div>

          {/* Professional Statement */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-8 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Professional Statement</h2>
              <p className="text-lg leading-relaxed mb-4">
                As a motivated junior developer and 4th-year IT student, I'm passionate about creating innovative solutions 
                and continuously expanding my technical skills. Through personal projects and internship experience, 
                I've developed a strong foundation in full-stack development and AI integration.
              </p>
              <p className="text-blue-200">
                I'm eager to contribute to meaningful projects where I can apply my growing expertise while learning 
                from experienced developers. I'm particularly interested in opportunities involving modern web technologies, 
                AI integration, or any project that challenges me to grow as a developer.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 print:pt-4 border-t border-gray-200 mt-8">
            <div className="flex justify-center gap-4 mb-4 print:hidden">
              <button
                onClick={() => window.print()}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Download PDF
              </button>
              <a
                href="mailto:rosexmee1122@gmail.com"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 Phon Ramy • Crafted with passion using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
