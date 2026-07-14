import { useState } from 'react';
import { translations } from './data/translations';
import Navbar from './components/Navbar';
import Header from './components/Header';
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
        <Competencies t={t} />
        <Experience t={t} />
        <Projects t={t} setZoomedImg={setZoomedImg} />
        <About t={t} />
      </main>
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 text-center text-xs text-gray-400">
        © 2026 Ekaterina Nováková
      </footer>
      <ImageModal zoomedImg={zoomedImg} setZoomedImg={setZoomedImg} />
    </div>
  );
}