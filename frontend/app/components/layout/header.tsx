"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, LogOut, User, Home, Info, Stethoscope, Image as ImageIcon, BookOpen, Mail, Calendar, Phone, Copy, Check } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { supabase } from '@/app/lib/supabase'
import { motion, AnimatePresence } from 'framer-motion'

const navIcons = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Stethoscope },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/about", label: "About", icon: Info },
  { href: "/blog", label: "Blog", icon: BookOpen },
]

const clinicLocations = [
  { name: "North Legon", phone: "0559497906", address: "Agbogba Road, North Legon" },
  { name: "Ashaley Botwe", phone: "0257091176", address: "School Junction, Ashaley Botwe" },
  { name: "ACP Estate", phone: "0545563839", address: "ACP Estate Junction, Kwabenya" },
]

function generateVCard(name: string, phone: string, address: string): string {
  return `BEGIN:VCARD
VERSION:3.0
FN:New Vision Dental - ${name}
TEL;TYPE=CELL:+233${phone}
ADR;TYPE=WORK:;;${address};Accra;;Ghana
ORG:New Vision Dental Clinic
END:VCARD`
}

const mobileNavItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Stethoscope },
  { href: "/book", label: "Book", icon: Calendar, isPrimary: true },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/about", label: "About", icon: Info },
  { href: "tel:+2330559497906", label: "Call", icon: Phone, isCall: true },
]

const MAIN_PHONE = "0559497906"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [session, setSession] = useState<any>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false)
  const [copiedLocation, setCopiedLocation] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const handleCall = () => {
    window.location.href = `tel:+233${MAIN_PHONE}`
  }

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(`+233${MAIN_PHONE}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `tel:+233${MAIN_PHONE}`
    }
  }

  const handleCopyLocation = async (location: typeof clinicLocations[0]) => {
    try {
      const vCard = generateVCard(location.name, location.phone, location.address)
      await navigator.clipboard.writeText(vCard)
      setCopiedLocation(location.name)
      setTimeout(() => setCopiedLocation(null), 2000)
    } catch {
      window.location.href = `tel:+233${location.phone}`
    }
  }

  const handleCallLocation = (phone: string) => {
    window.location.href = `tel:+233${phone}`
  }
  const isWineNavPage = pathname === '/services' || pathname.startsWith('/services/') || pathname === '/gallery' || pathname === '/about' || pathname === '/blog' || pathname.startsWith('/blog/') || pathname === '/admin' || pathname.startsWith('/admin/') || pathname === '/dashboard' || pathname.startsWith('/dashboard/')

  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ]

  const [desktopContactOpen, setDesktopContactOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check authentication status on mount and listen for changes
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setIsLoading(false)

        if (session?.user?.id) {
          // Non-blocking role fetch — UI renders immediately
          supabase.from('profiles').select('role').eq('id', session.user.id).single().then(({ data }) => {
            setUserRole(data?.role || 'USER')
          })
        } else {
          setUserRole(null)
        }
      } catch (error) {
        console.error('Error checking auth:', error)
        setSession(null)
        setUserRole(null)
        setIsLoading(false)
      }
    }

    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        setSession(newSession)
        if (newSession?.user?.id) {
          supabase.from('profiles').select('role').eq('id', newSession.user.id).single().then(({ data }) => {
            setUserRole(data?.role || 'USER')
          })
        } else {
          setUserRole(null)
        }
      }
    )

    return () => subscription?.unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      setSession(null)
      setUserRole(null)
      setMobileOpen(false)
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const getDashboardLink = () => {
    if (userRole === 'ADMIN') {
      return '/admin'
    }
    return '/dashboard'
  }

  return (
    <>
      {/* Desktop Side Menu - Shows when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-white/60 p-3"
          >
            {/* Nav Icons */}
            {navIcons.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative p-3 text-[#5C0F22] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-xl transition-all duration-300"
                  title={link.label}
                >
                  <Icon className="w-5 h-5" />
                  {/* Tooltip */}
                  <span className="absolute left-full ml-3 px-3 py-1.5 bg-[#5C0F22] text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {link.label}
                  </span>
                </Link>
              )
            })}

            {/* Divider */}
            <div className="w-8 h-px bg-gray-200 my-2" />

            {/* Auth */}
            {!isLoading && (
              session ? (
                <>
                  <Link
                    href={getDashboardLink()}
                    className="p-3 text-[#5C0F22] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-xl transition-all duration-300"
                    title={userRole === 'ADMIN' ? 'Admin' : 'Dashboard'}
                  >
                    <User className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-3 text-[#5C0F22] hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              ) : (
                  <Link
                    href="/book"
                    className="p-3 btn-golden-shine rounded-full shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl transition-shadow duration-300"
                    title="Book Now"
                  >
                  <Stethoscope className="w-5 h-5" />
                </Link>
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Normal Header - Shows when in hero section */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full fixed top-0 left-0 z-50 font-['Inter'] py-2"
          >
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="relative px-4 sm:px-6 py-2 flex items-center justify-between">
                {/* LEFT: Logo */}
                <Link href="/" className="flex items-center shrink-0 group">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 transition-transform duration-300 group-hover:scale-105">
                    <Image 
                      src="/images/nv-new-logo-03.png" 
                      alt="New Vision Dental" 
                      fill
                      className="object-contain"
                      priority
                      sizes="72px"
                    />
                  </div>
                </Link>

                {/* CENTER: Navigation - Desktop */}
                <nav className="hidden lg:flex items-center gap-1">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-4 py-2 ${isWineNavPage ? 'text-[#5C0F22]' : 'text-white/90'} text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#D4AF37] group`}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </Link>
                  ))}
                  
                  {/* Contact Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setDesktopContactOpen(true)}
                    onMouseLeave={() => setDesktopContactOpen(false)}
                  >
                    <button
                      className={`relative px-4 py-2 ${isWineNavPage ? 'text-[#5C0F22]' : 'text-white/90'} text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#D4AF37] group`}
                    >
                      Contact
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {desktopContactOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                        >
                          <div className="p-3">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Clinic Locations</p>
                            {clinicLocations.map((location) => (
                              <div key={location.name} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                                <div>
                                  <p className="text-sm font-medium text-[#5C0F22]">{location.name}</p>
                                  <p className="text-xs text-gray-500">+233 {location.phone}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => handleCallLocation(location.phone)}
                                    className="p-2 rounded-lg hover:bg-[#D4AF37]/10 text-[#D4AF37] transition-colors"
                                    title="Call"
                                  >
                                    <Phone className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleCopyLocation(location)}
                                    className="p-2 rounded-lg hover:bg-green-50 text-gray-400 hover:text-green-600 transition-colors"
                                    title="Copy to phonebook"
                                  >
                                    {copiedLocation === location.name ? (
                                      <Check className="w-4 h-4 text-green-500" />
                                    ) : (
                                      <Copy className="w-4 h-4" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-gray-100 p-3 bg-gray-50">
                            <a 
                              href="mailto:newvisiondentalclinic@gmail.com"
                              className="flex items-center gap-2 px-3 py-2 text-sm text-[#5C0F22] hover:text-[#D4AF37] transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              newvisiondentalclinic@gmail.com
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>

                {/* RIGHT: Auth & CTA */}
                <div className="flex items-center gap-2">
                  {/* Mobile Auth - Shows opposite to logo on mobile */}
                  <div className="flex md:hidden items-center gap-2">
                    <a
                      href="tel:+2330559497906"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5C0F22]/10 hover:bg-[#5C0F22]/20 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 text-[#5C0F22]" />
                    </a>
                    {!isLoading && (
                      session ? (
                        <Link
                          href={getDashboardLink()}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300"
                        >
                          <User className="w-5 h-5 text-[#D4AF37]" />
                        </Link>
                      ) : (
                        <Link
                          href="/login"
                          className="px-3 py-2 text-white text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
                        >
                          Log in
                        </Link>
                      )
                    )}
                  </div>

                  {/* Desktop Auth Section */}
                  <div className="hidden md:flex items-center gap-3">
                    {!isLoading ? (
                      session ? (
                        <>
                          <Link
                            href={getDashboardLink()}
                            className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:text-[#D4AF37] transition-colors duration-300"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/20">
                              <User className="w-4 h-4 text-[#D4AF37]" />
                            </div>
                            <span>{userRole === 'ADMIN' ? 'Admin' : 'Dashboard'}</span>
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="p-2 text-white hover:text-red-400 transition-colors duration-300 rounded-full hover:bg-white/10"
                          >
                            <LogOut className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          {/* Log in - Elegant Ghost Button */}
                          <Link
                            href="/login"
                            className="px-5 py-2.5 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40"
                          >
                            Log in
                          </Link>
                          {/* Book Now - Golden Shine Button */}
                          <Link
                            href="/book"
                            className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold overflow-hidden btn-golden-shine shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-shadow duration-300 hover:scale-105"
                          >
                            <span className="relative z-10">Book Now</span>
                          </Link>
                        </>
                      )
                    ) : (
                      <div className="w-20 h-8 bg-white/10 rounded-lg animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl shadow-black/10">
        <div className="flex items-center justify-between px-2 py-1">
          {[{ href: "/", label: "Home", icon: Home }, { href: "/services", label: "Services", icon: Stethoscope }, { href: "/book", label: "Book", icon: Calendar, isPrimary: true }, { href: "/gallery", label: "Gallery", icon: ImageIcon }, { href: "/about", label: "About", icon: Info }].map((item) => {
            const Icon = item.icon
            const isBookNow = item.isPrimary
            
            if (isBookNow) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center py-2 -mt-5"
                >
                  <div className="w-12 h-12 rounded-full btn-golden-shine flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 mb-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-semibold text-[#D4AF37]">{item.label}</span>
                </Link>
              )
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center py-2 px-2 text-gray-500 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <Icon className="w-5 h-5 mb-0.5" />
                <span className="text-[9px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
        <div className="h-safe-area-inset-bottom bg-white" />
      </nav>

      {/* Tablet Top Navigation */}
      <nav className="hidden md:block lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-around px-2 py-2 max-w-2xl mx-auto">
          {[{ href: "/", label: "Home", icon: Home }, { href: "/services", label: "Services", icon: Stethoscope }, { href: "/book", label: "Book", icon: Calendar }, { href: "/gallery", label: "Gallery", icon: ImageIcon }, { href: "/about", label: "About", icon: Info }].map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center px-2 py-1 text-gray-600 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Side Panel (for additional options) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Side Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Panel Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image 
                        src="/images/nv-new-logo-03.png" 
                        alt="New Vision Dental" 
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col gap-1">
                    {mainNavLinks.map((link, idx) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 text-[#5C0F22] text-base font-medium hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 py-3 px-4 rounded-full"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Auth Links */}
                <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                  {/* Call Now - Always visible */}
                  <a
                    href={`tel:+233${MAIN_PHONE}`}
                    className="flex items-center gap-3 text-[#5C0F22] text-base font-medium hover:text-[#D4AF37] transition-colors duration-300 py-3 px-4 rounded-full hover:bg-[#D4AF37]/5 mb-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                    Call Now: {MAIN_PHONE}
                  </a>

                  {!isLoading ? (
                    session ? (
                      <div className="space-y-2">
                        <Link
                          href={getDashboardLink()}
                          className="flex items-center gap-3 text-[#5C0F22] text-base font-medium hover:text-[#D4AF37] transition-colors duration-300 py-3 px-4 rounded-full hover:bg-[#D4AF37]/5"
                          onClick={() => setMobileOpen(false)}
                        >
                          <User className="w-5 h-5" />
                          {userRole === 'ADMIN' ? 'Admin Dashboard' : 'Dashboard'}
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout()
                            setMobileOpen(false)
                          }}
                          className="w-full flex items-center gap-3 text-red-500 text-base font-medium hover:text-red-600 transition-colors duration-300 py-3 px-4 rounded-full hover:bg-red-50"
                        >
                          <LogOut className="w-5 h-5" />
                          Logout
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Link
                          href="/login"
                          className="block w-full px-6 py-3 border-2 border-[#5C0F22] text-[#5C0F22] text-base font-medium rounded-full hover:bg-[#5C0F22]/5 transition-all duration-300 text-center"
                          onClick={() => setMobileOpen(false)}
                        >
                          Log in
                        </Link>
                        <Link
                          href="/book"
                          className="block w-full px-6 py-3 btn-golden-shine rounded-full text-center shadow-lg shadow-[#D4AF37]/25"
                          onClick={() => setMobileOpen(false)}
                        >
                          Book Now
                        </Link>
                      </div>
                    )
                  ) : (
                    <div className="space-y-3">
                      <div className="w-full h-12 bg-gray-200 rounded-full animate-pulse" />
                      <div className="w-full h-12 bg-gray-200 rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
