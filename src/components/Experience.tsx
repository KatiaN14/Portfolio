export default function Experience({ t }: any) {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-headings mb-10">
          {t.expTitle}
        </h2>

        <div className="border-l-2 border-gray-100 pl-6 space-y-10 py-2 ml-2 md:ml-4">
          
          {/* AI Role */}
          <div className="relative">
            <div className="absolute -left-[33px] top-1.5 bg-white p-1 rounded-full">
              <div className="w-3.5 h-3.5 bg-headings rounded-full shadow-sm"></div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="font-bold text-gray-950 text-lg md:text-xl">{t.expRole1}</h3>
              <span className="text-xs font-bold text-headings uppercase tracking-wider mt-1 md:mt-0 bg-headings/5 px-2 py-1 rounded-md">{t.expDate1}</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2">
              {t.expDesc1}
            </p>
          </div>

          {/* Teacher / Translator Role */}
          <div className="relative">
            <div className="absolute -left-[33px] top-1.5 bg-white p-1 rounded-full">
              <div className="w-3.5 h-3.5 bg-gray-300 rounded-full shadow-sm"></div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="font-bold text-gray-950 text-lg md:text-xl">{t.expRole2}</h3>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1 md:mt-0 bg-gray-100 px-2 py-1 rounded-md">{t.expDate2}</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2">
              {t.expDesc2}
            </p>
          </div>

          {/* Volunteering Role */}
          <div className="relative">
            <div className="absolute -left-[33px] top-1.5 bg-white p-1 rounded-full">
              <div className="w-3.5 h-3.5 bg-gray-300 rounded-full shadow-sm"></div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="font-bold text-gray-950 text-lg md:text-xl">{t.expRole3}</h3>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1 md:mt-0 bg-gray-100 px-2 py-1 rounded-md">{t.expDate3}</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2">
              {t.expDesc3}
            </p>
          </div>

        </div>
      </section>
  );
}