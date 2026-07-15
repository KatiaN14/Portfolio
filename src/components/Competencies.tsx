export default function Competencies({ t }: any) {
  return (
    <section id="competencies" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-headings mb-8">
          {t.skillsTitle}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="py-4 px-4 font-semibold text-gray-900 w-1/4">{t.headerCategory}</th>
                <th className="py-4 px-4 font-semibold text-gray-900 w-1/4">{t.headerTechnologies}</th>
                <th className="py-4 px-4 font-semibold text-gray-900 w-1/2">{t.headerContext}</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base align-top">
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                <td className="py-5 px-4 font-semibold text-gray-900 group-hover:text-headings transition-colors">{t.catData}</td>
                <td className="py-5 px-4 text-gray-600 font-medium">{t.techData}</td>
                <td className="py-5 px-4 text-gray-500 leading-relaxed">{t.descData}</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                <td className="py-5 px-4 font-semibold text-gray-900 group-hover:text-headings transition-colors">{t.catProg}</td>
                <td className="py-5 px-4 text-gray-600 font-medium">{t.techProg}</td>
                <td className="py-5 px-4 text-gray-500 leading-relaxed">{t.descProg}</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                <td className="py-5 px-4 font-semibold text-gray-900 group-hover:text-headings transition-colors">{t.catFront}</td>
                <td className="py-5 px-4 text-gray-600 font-medium">{t.techFront}</td>
                <td className="py-5 px-4 text-gray-500 leading-relaxed">{t.descFront}</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                <td className="py-5 px-4 font-semibold text-gray-900 group-hover:text-headings transition-colors">{t.catBiz}</td>
                <td className="py-5 px-4 text-gray-600 font-medium">{t.techBiz}</td>
                <td className="py-5 px-4 text-gray-500 leading-relaxed">{t.descBiz}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  );
}