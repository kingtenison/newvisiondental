export default function WhyChooseUs() {
  const features = [
    { title: "Elite Clinical Team", desc: "Top-tier specialists trained in advanced restorative techniques." },
    { title: "Modern Technology", desc: "Digital scanning and 3D imaging for precise diagnostics." },
    { title: "Luxury Comfort", desc: "A serene environment designed to eliminate dental anxiety." }
  ]
  return (
    <section className="py-24 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f) => (
            <div key={f.title} className="group">
              <h3 className="text-[#D4AF37] text-xs font-black tracking-[0.3em] mb-4 uppercase">{f.title}</h3>
              <p className="text-white text-lg font-bold tracking-tight leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
