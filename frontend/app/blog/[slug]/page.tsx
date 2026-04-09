import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Eye, BookOpen, Sparkles, Heart, Share2 } from "lucide-react";

// Fetch blog post by slug
async function getBlogPost(slug: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  const response = await fetch(`${supabaseUrl}/rest/v1/blogs?slug=eq.${slug}&status=eq.published`, {
    headers: {
      'apikey': supabaseAnonKey || '',
      'Authorization': `Bearer ${supabaseAnonKey || ''}`
    },
    cache: 'no-store'
  });
  
  if (!response.ok) {
    return null;
  }
  
  const data = await response.json();
  return data[0] || null;
}

// Update view count
async function incrementViewCount(id: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  await fetch(`${supabaseUrl}/rest/v1/blogs?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'apikey': supabaseAnonKey || '',
      'Authorization': `Bearer ${supabaseAnonKey || ''}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      views: 0
    })
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  await incrementViewCount(post.id);

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">

      {/* Hero Section — wine gradient */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="absolute top-10 right-[20%] w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-[15%] w-48 h-48 bg-[#D4AF37]/6 rounded-full blur-[100px]" />

        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-12 md:py-16">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-6 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <span key={tag} className="text-[11px] px-3 py-1 bg-white/10 text-white/80 rounded-full border border-white/10 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span>{post.author || 'Admin'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D4AF37]/60" />
              <span>{new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            {post.read_time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]/60" />
                <span>{post.read_time}</span>
              </div>
            )}
            {post.views > 0 && (
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#D4AF37]/60" />
                <span>{post.views} views</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image — full width */}
      {post.featured_image && (
        <section className="w-full px-4 sm:px-6 lg:px-12 -mt-1">
          <div className="relative h-[300px] md:h-[450px] lg:h-[500px] w-full rounded-b-2xl md:rounded-b-3xl overflow-hidden shadow-2xl shadow-black/10">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {/* Article Content — full width */}
      <section className="w-full py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#5C0F22] prose-a:text-[#5C0F22] prose-a:no-underline hover:prose-a:text-[#D4AF37] prose-strong:text-[#5C0F22] prose-img:rounded-xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-[#D4AF37]/15">
                <h3 className="text-lg font-bold text-[#5C0F22] mb-4">Share this article</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://newvisiondental.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#D4AF37]/15 text-[#5C0F22] rounded-full text-sm font-medium hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://newvisiondental.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#D4AF37]/15 text-[#5C0F22] rounded-full text-sm font-medium hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://newvisiondental.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#D4AF37]/15 text-[#5C0F22] rounded-full text-sm font-medium hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Info Card */}
                <div className="bg-gray-50 rounded-2xl border border-[#D4AF37]/15 p-6">
                  <h3 className="text-sm font-bold text-[#5C0F22] uppercase tracking-wider mb-4">Article Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Author</span>
                      <span className="text-[#5C0F22] text-sm font-semibold">{post.author?.split(' ')[0] || 'Admin'}</span>
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Read Time</span>
                      <span className="text-[#5C0F22] text-sm font-semibold">{post.read_time || '5 min'}</span>
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Published</span>
                      <span className="text-[#5C0F22] text-sm font-semibold">{new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#5C0F22] to-[#4a0c1b] rounded-2xl p-6 border border-[#D4AF37]/15">
                  <Sparkles className="w-8 h-8 text-[#D4AF37] mb-3" />
                  <h3 className="text-white font-bold mb-2">Need Dental Advice?</h3>
                  <p className="text-white/60 text-sm mb-4">Book a consultation with our expert dentists today.</p>
                  <Link href="/book" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-[#1a0a10] rounded-full text-sm font-semibold hover:bg-[#E8C547] transition-colors">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl border border-[#D4AF37]/15 p-6">
                    <h3 className="text-sm font-bold text-[#5C0F22] uppercase tracking-wider mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <span key={tag} className="text-xs px-3 py-1.5 bg-[#D4AF37]/8 text-[#5C0F22] rounded-full border border-[#D4AF37]/10 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="absolute top-10 left-[20%] w-48 h-48 bg-[#D4AF37]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-[25%] w-64 h-64 bg-[#D4AF37]/6 rounded-full blur-[120px]" />

        <div className="relative w-full px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Enjoyed This Article?
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Discover more dental health tips and insights on our blog, or book a consultation to put your knowledge into action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold btn-golden-shine shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  More Articles
                </span>
              </Link>
              <Link href="/book" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                <Calendar className="w-5 h-5" />
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
