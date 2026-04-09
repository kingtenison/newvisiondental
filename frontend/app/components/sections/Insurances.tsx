export default function Insurances() {
  const partners = ["Nationwide", "MetLife", "Glico Health", "Phoenix Health", "Apex Health"]
  return (
    <section className="py-16 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-white/30 text-[9px] font-black tracking-[0.4em] uppercase mb-10">Trusted by Leading Insurance Providers</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map(p => (
            <span key={p} className="text-white font-black text-xl tracking-tighter uppercase">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
