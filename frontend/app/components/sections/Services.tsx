"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  { title: "Dental Cleaning", img: "/images/services/dental-cleaning.jpg" },
  { title: "Braces", img: "/images/services/braces.jpg" },
  { title: "Implants", img: "/images/services/dental-implants.jpg" },
  { title: "Children Dentistry", img: "/images/services/children-dentistry.jpg" }
]

export default function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-12 text-center">Our Specialized Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-neutral-900 rounded-xl overflow-hidden border border-white/5">
              <div className="relative h-48 w-full">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-4 text-center font-semibold text-white">{s.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
