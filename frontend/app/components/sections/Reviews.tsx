export default function Reviews() {
  const reviews = [
    { name: "Kofi Mensah", text: "The most professional dental experience I have ever had in Accra." },
    { name: "Abena Osei", text: "State-of-the-art facility. My smile design looks incredibly natural." }
  ]
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-[#D4AF37] text-[10px] font-black tracking-[0.4em] mb-20 text-center uppercase">Patient Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((r) => (
            <div key={r.name} className="p-12 border border-white/5 bg-[#050505] rounded-2xl">
              <p className="text-2xl font-bold tracking-tight text-white mb-8 italic">"{r.text}"</p>
              <p className="text-[#D4AF37] text-[10px] font-black tracking-widest uppercase">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
