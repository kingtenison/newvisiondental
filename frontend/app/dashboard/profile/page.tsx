"use client"
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (!error) setProfile(data)
      setLoading(false)
    }

    getProfile()
  }, [router])

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37]">LOADING...</div>

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-auto max-w-3xl bg-[#5C0F22]/20 border border-[#D4AF37]/30 p-12 rounded-sm shadow-2xl">
        <h1 className="text-3xl font-black tracking-[0.3em] text-white uppercase mb-8 border-b border-[#D4AF37]/20 pb-4">
          Patient <span className="text-[#D4AF37]">Profile</span>
        </h1>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase mb-1">Full Name</p>
              <p className="text-xl text-white font-bold uppercase">{profile?.full_name || 'Not Set'}</p>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase mb-1">Role</p>
              <p className="text-xl text-white font-bold uppercase">{profile?.role}</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
             <Link 
              href="/dashboard"
              className="inline-block px-10 py-4 bg-[#D4AF37] text-black text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#FBF5B7] transition-all"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
