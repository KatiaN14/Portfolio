export default function Navbar({ lang, setLang, t}: any) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center transition-all">
      <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-500">
        <a href="#competencies" className="hover:text-gray-900 transition-colors">{t.navCompetencies}</a>
        <a href="#experience" className="hover:text-gray-900 transition-colors">{t.navExperience}</a>
        <a href="#projects" className="hover:text-gray-900 transition-colors">{t.navProjects}</a>
        <a href="#about" className="hover:text-gray-900 transition-colors">{t.navAbout}</a>
      </div>
      
      <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full ml-auto md:ml-0" role="group" aria-label="Language switcher">
        <button 
          onClick={() => setLang('en')}
          aria-label="Switch to English"
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${lang === 'en' ? 'bg-white text-gray-900 shadow-xs font-semibold' : 'text-gray-500 hover:text-gray-900'}`}
        >EN</button>
        <button 
          onClick={() => setLang('es')}
          aria-label="Cambiar a español"
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${lang === 'es' ? 'bg-white text-gray-900 shadow-xs font-semibold' : 'text-gray-500 hover:text-gray-900'}`}
        >ES</button>
      </div>
    </nav>
  );
}