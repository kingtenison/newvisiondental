export default function Locations() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase mb-6">Find Us in <br/><span className="text-[#D4AF37]">Accra, Ghana</span></h2>
          <p className="text-white/60 font-bold text-sm tracking-wide mb-8">Visit our flagship clinic in the heart of the city for unparalleled dental care.</p>
          <div className="space-y-4">
            <p className="text-white font-black text-xs tracking-widest uppercase">123 Liberation Road, Accra</p>
            <p className="text-white font-black text-xs tracking-widest uppercase">Mon - Sat: 08:00 - 18:00</p>
          </div>
        </div>
        <div className="h-80 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
           <span className="text-white/20 font-black tracking-widest text-[10px] uppercase">Interactive Map Loading...</span>
        </div>
      </div>
    </section>
  )
}
