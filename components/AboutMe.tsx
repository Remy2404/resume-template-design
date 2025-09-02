import { Award, Code, Brain, Globe, Lightbulb, Rocket } from 'lucide-react';

const AboutMeSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-serif font-bold text-2xl text-gray-900 border-b border-gray-300 pb-2">
        ABOUT ME 
      </h2>
      
      <div className="flex items-start gap-3">
        <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate full-stack developer with a deep fascination for cutting-edge technology and AI innovation. 
          My journey spans across multiple programming languages and frameworks, from building intelligent chatbots with advanced AI models 
          to crafting seamless web and mobile applications.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <Brain className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700 leading-relaxed">
          Currently focused on AI-powered solutions, I've developed projects like <strong>Polymind</strong> - a multi-modal Telegram bot 
          integrating over 50 AI models, and <strong>Apsara AI</strong> - an intelligent application platform. I'm particularly drawn to 
          the intersection of artificial intelligence, computer vision, and practical software solutions.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <Code className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700 leading-relaxed">
          My technical expertise includes React/Next.js, React Native, Vue.js, Python, Java, PHP, and mobile development with Flutter and Kotlin. 
          I enjoy working on diverse projects - from e-commerce APIs and financial applications to image processing labs and educational platforms 
          like the KhmerCoders community initiative.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700 leading-relaxed">
          What drives me is the constant pursuit of learning and innovation. Whether it's exploring new frameworks, contributing to open-source 
          projects, or mentoring fellow developers, I believe in the power of technology to solve real-world problems and create meaningful impact.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <Rocket className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
        <p className="text-gray-700 leading-relaxed">
          I'm always excited to collaborate on challenging projects, especially those involving AI/ML, full-stack development, or innovative 
          mobile solutions. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection;