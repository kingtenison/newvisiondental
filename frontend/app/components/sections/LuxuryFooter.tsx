export default function LuxuryFooter() {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="container mx-auto px-4 grid md:grid-cols-1 lg:grid-cols-4 gap-12 mb-12 text-center lg:text-left">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">New Vision <span className="text-[#D4AF37]">Dental</span></h2>
          <p className="text-gray-500 max-w-sm mx-auto lg:mx-0">Redefining dental excellence in Ghana with luxury facilities and expert clinical care.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-500 space-y-2">
            {/* LINK UPDATED TO /book */}
            <li><a href="/book" className="hover:text-[#D4AF37]">Book Appointment</a></li>
            <li><a href="/gallery" className="hover:text-[#D4AF37]">Gallery</a></li>
            <li><a href="/contact" className="hover:text-[#D4AF37]">Locations</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Locations</h3>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Ashaley Botwe</li>
            <li>North Legon</li>
            <li>Labadi</li>
            <li>ACP Estate</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-700 text-xs border-t border-white/5 pt-8">
        &copy; 2026 New Vision Dental Clinic. Built for Excellence.
      </div>
    </footer>
  )
}
