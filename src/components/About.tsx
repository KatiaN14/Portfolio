import { Languages, Activity} from 'lucide-react';

export default function AboutMe({ t }: any) {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-gmvRed mb-8">
          {t.aboutTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#f5f5f7] rounded-2xl text-gmvRed shrink-0">
              <Languages size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-950 text-lg mb-2">{t.langLabel}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t.langDesc}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#f5f5f7] rounded-2xl text-gmvRed shrink-0">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-950 text-lg mb-2">{t.runLabel}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t.runDesc}
              </p>
            </div>
          </div>

        </div>
      </section>
  );
}