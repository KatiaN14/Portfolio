import { useState } from 'react';
import { translations } from './data/translations';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import ImageModal from './components/Image';

export default function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const t = translations[lang];

  return (
    <div className="min-h-screen font-sans antialiased bg-white text-[#1d1d1f]">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Header t={t} />
        <Introduction t={t} />
        <Competencies t={t} />
        <Experience t={t} />
        <Projects t={t} setZoomedImg={setZoomedImg} />
        <About t={t} />
      </main>
      
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 flex flex-col items-center gap-6">
      
        {/* Contact & CV Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-gray-600">
          <a 
            href="mailto:your.email@example.com" 
            className="hover:text-gray-900 transition-colors"
          >novak.katia12@gmail.com</a>
          <a 
            href="https://www.linkedin.com/in/ekaterina-novakova/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#0a66c2] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="/cv-ekaterina-novakova.pdf" 
            download 
            className="hover:text-gray-900 transition-colors"
          >
            Curriculum
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400">
          © 2026 Ekaterina Nováková
        </div>
      </footer>

      <ImageModal zoomedImg={zoomedImg} setZoomedImg={setZoomedImg} />
    </div>
  );
}