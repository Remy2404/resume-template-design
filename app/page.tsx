'use client'
import Image from "next/image"
import AboutMeSection from "@/components/AboutMe"

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

          <div className="text-sm text-gray-600 mb-4">
            Phnom Penh, Cambodia | +855 96 206 4081 | rosexmee1122@gmail.com |{' '}
            <a
              href="https://github.com/Remy2404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              GitHub
            </a>{' '}
            |{' '}
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

        {/* Technical Skills Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Technical Skills
          </h2>

          <div className="space-y-4">
            <div>
              <strong className="text-gray-800">Frontend:</strong>
              <span className="text-gray-700 ml-2">React.js, Next.js, Tailwind CSS, Bootstrap</span>
            </div>
            <div>
              <strong className="text-gray-800">Backend:</strong>
              <span className="text-gray-700 ml-2">Node.js, Express.js, Python</span>
            </div>
            <div>
              <strong className="text-gray-800">Databases:</strong>
              <span className="text-gray-700 ml-2">MongoDB, MySQL</span>
            </div>
            <div>
              <strong className="text-gray-800">Mobile Development:</strong>
              <span className="text-gray-700 ml-2">React Native</span>
            </div>
            <div>
              <strong className="text-gray-800">AI & APIs:</strong>
              <span className="text-gray-700 ml-2">AI assistant integrations, real-time data processing</span>
            </div>
            <div>
              <strong className="text-gray-800">Tools:</strong>
              <span className="text-gray-700 ml-2">Git, Docker, Vercel, Render, Railway</span>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Professional Experience
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Full-Stack Developer (Freelance)</h3>
                <span className="text-sm text-gray-500">Phnom Penh, Cambodia | 2023 – Present</span>
              </div>
              <ul className="text-gray-700 space-y-2 mt-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Built AI-powered chat assistant with sub-second response times using multi-model architecture and efficient context routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Developed cross-platform e-commerce mobile app reducing delivery wait times by 40%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Created APIs for real-time data processing and integrated payment gateways for seamless transactions</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">Software Development Intern</h3>
                <span className="text-sm text-gray-500">KhmerCoder Community, Phnom Penh, Cambodia | 2022</span>
              </div>
              <ul className="text-gray-700 space-y-2 mt-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Assisted in building internal tools for data tracking and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Improved application performance by optimizing API calls, reducing load time by 25%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Projects
          </h2>

          <div className="space-y-4">
            <div>
              <strong className="text-gray-800">AI Assistant Platform</strong>
              <span className="text-gray-700 ml-2">– Multi-model AI chatbot with real-time responses for web and mobile</span>
            </div>
            <div>
              <strong className="text-gray-800">Food Ordering Website</strong>
              <span className="text-gray-700 ml-2">– Full-stack app with user-friendly ordering interface and secure payment system</span>
            </div>
            <div>
              <strong className="text-gray-800">E-commerce Mobile App</strong>
              <span className="text-gray-700 ml-2">– React Native app integrating real-time tracking and customer notifications</span>
            </div>
            <div>
              <strong className="text-gray-800">Idea to Stack</strong>
              <span className="text-gray-700 ml-2">– AI-powered tool that transforms app ideas into detailed full-stack coding prompts with React 19, TypeScript, and glassmorphism UI</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Education
          </h2>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="font-semibold text-lg text-gray-900">Bachelor's in Information Technology</h3>
              <span className="text-sm text-gray-500">Royal University of Phnom Penh, Phnom Penh | 2022 – 2025</span>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Languages
          </h2>

          <div className="space-y-2">
            <div>
              <strong className="text-gray-800">English</strong>
              <span className="text-gray-700 ml-2">– Intermediate</span>
            </div>
            <div>
              <strong className="text-gray-800">Khmer</strong>
              <span className="text-gray-700 ml-2">– Native</span>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4 uppercase tracking-wide">
            Contact Info
          </h2>

          <div className="space-y-2">
            <div>
              <strong className="text-gray-800">Email:</strong>
              <span className="text-gray-700 ml-2">rosexmee1122@gmail.com</span>
            </div>
            <div>
              <strong className="text-gray-800">Phone:</strong>
              <span className="text-gray-700 ml-2">+855 96 206 4081</span>
            </div>
            <div>
              <strong className="text-gray-800">GitHub:</strong>
              <a
                href="https://github.com/Remy2404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 ml-2 hover:text-gray-900 underline"
              >
                github.com/Remy2404
              </a>
            </div>
            <div>
              <strong className="text-gray-800">Portfolio:</strong>
              <a
                href="https://phon-ramy-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 ml-2 hover:text-gray-900 underline"
              >
                phon-ramy-five.vercel.app
              </a>
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
