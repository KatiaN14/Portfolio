export default function Introduction({ t }: any) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 bg-[#f5f5f7]/40 rounded-3xl p-8 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gmvRed mb-4">
          {t.whyTitle}
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
          {t.goalsDesc}
        </p>
      </section>
  );
}