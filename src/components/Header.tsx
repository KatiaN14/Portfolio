export default function Header({ t }: any) {
  return (
    <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <img 
          src="/headshot.jpg" 
          alt="Ekaterina Nováková" 
          className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover border-4 border-white shadow-xl mb-8"
        />
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-950 mb-3 transition-all">
          {t.name}
        </h1>
        <p className="text-base md:text-lg font-medium text-gray-600 mb-4 px-4 max-w-2xl mx-auto">
          <span className="block">{t.headerSubtitle1}</span>
          <span className="block mt-1">{t.headerSubtitle2}</span>
        </p>

        <h2 className="text-sm md:text-base font-semibold tracking-widest text-headings uppercase mb-10 mt-6 inline-block bg-headings/10 px-4 py-1.5 rounded-full">
          {t.title}
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-500 font-normal leading-relaxed max-w-3xl mx-auto">
          <span className="text-gray-900 font-semibold block mb-2">{t.headerGreeting}</span>
          {t.headerPurpose}
        </p>
      </header>
  );
}