import {ZoomIn} from 'lucide-react';

export default function Projects({ t, setZoomedImg }: { t: any, setZoomedImg: (img: string | null) => void }) {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-gmvRed mb-8">
          {t.projectsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Project 1 */}
          <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div 
              className="h-44 relative overflow-hidden bg-gray-100 cursor-zoom-in group/img"
              onClick={() => setZoomedImg("/project1.jpg")}
            >
              <img src="/project1.jpg" alt="Orthodontist Web transformation" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white drop-shadow-lg" size={32} />
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-2">{t.orthoTitle}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t.orthoDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-50 text-[11px] font-bold text-gmvRed uppercase tracking-wider">
                UX / UI Refactor
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div 
              className="h-44 relative overflow-hidden bg-gray-100 cursor-zoom-in group/img"
              onClick={() => setZoomedImg("/project2.jpg")}
            >
              <img src="/project2.jpg" alt="study in Spain website" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white drop-shadow-lg" size={32} />
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-2">{t.studyTitle}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t.studyDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-50 text-[11px] font-bold text-gmvRed uppercase tracking-wider">
                Fullstack / Localization
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div 
              className="h-44 relative overflow-hidden bg-gray-100 cursor-zoom-in group/img"
              onClick={() => setZoomedImg("/project3.jpg")}
            >
              <img src="/project3.jpg" alt="Technovation group project screenshot" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white drop-shadow-lg" size={32} />
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-950 text-base mb-2">{t.girlsTitle}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t.girlsDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-50 text-[11px] font-bold text-gmvRed uppercase tracking-wider">
                Mentorship / WebApp
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}