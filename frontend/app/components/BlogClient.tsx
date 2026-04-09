"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, ArrowRight, Search, Sparkles, BookOpen } from "lucide-react";

export default function BlogClient({ posts }: { posts: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.tags && post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[35vh] flex flex-col overflow-hidden">
        {/* Full Width 4x2 Image Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative h-full w-full">
              <Image
                src="/images/gallery/dental bacccccc.png"
                alt="Dental background"
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
        
        {/* Wine Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0814]/95 via-[#5C0F22]/70 to-[#7A1A2E]/30" />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 flex-1 flex items-center justify-center py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto animate-[fadeInUp_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
              <BookOpen className="w-4 h-4" /> Dental Insights
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
              <span className="text-white">Dental Health</span>
              <span className="block text-golden-shine mt-1">Blog</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Expert insights, tips, and advice for a healthier smile. Stay informed with the latest in dental care.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="w-full bg-[#e7e7e7] pt-10 pb-4">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mx-auto animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/60" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-[#5C0F22]/25 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/20 focus:border-[#5C0F22]/50 transition-all text-sm placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-8 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-[#D4AF37]/30 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featuredPost && (
                <div className="mb-10 animate-[fadeInUp_0.7s_ease-out]">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <div className="group relative bg-white rounded-3xl border border-[#D4AF37]/15 overflow-hidden hover:shadow-xl hover:shadow-[#D4AF37]/8 hover:border-[#D4AF37]/30 transition-all duration-500">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-[280px] md:h-[400px] overflow-hidden">
                          {featuredPost.featured_image ? (
                            <Image src={featuredPost.featured_image} alt={featuredPost.title} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized={featuredPost.featured_image.includes('cloudinary')} />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#5C0F22]/10 via-[#D4AF37]/5 to-[#5C0F22]/10 flex items-center justify-center">
                              <BookOpen className="w-16 h-16 text-[#D4AF37]/20" />
                            </div>
                          )}
                          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#D4AF37] text-[#1a0a10] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            <Sparkles className="w-3 h-3" /> Featured
                          </div>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          {featuredPost.tags && featuredPost.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {featuredPost.tags.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="text-[11px] px-3 py-1 bg-[#D4AF37]/10 text-[#5C0F22] rounded-full font-medium border border-[#D4AF37]/15">{tag}</span>
                              ))}
                            </div>
                          )}
                          <h2 className="text-2xl sm:text-3xl font-bold text-[#5C0F22] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">{featuredPost.title}</h2>
                          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                          <div className="flex items-center gap-5 text-xs text-gray-500 mb-6">
                            <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#D4AF37]/60" /><span>{featuredPost.author?.split(" ")[0] || "Admin"}</span></div>
                            <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#D4AF37]/60" /><span>{new Date(featuredPost.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></div>
                            {featuredPost.read_time && <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#D4AF37]/60" /><span>{featuredPost.read_time}</span></div>}
                          </div>
                          <div className="inline-flex items-center gap-2 text-[#5C0F22] font-semibold text-sm group-hover:gap-3 transition-all">Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                        </div>
                      </div>
                      <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                </div>
              )}

              {/* Remaining Articles Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post: any, index: number) => (
                    <div key={post.id} className="animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: `${index * 60}ms` }}>
                      <Link href={`/blog/${post.slug}`}>
                        <div className="group bg-white rounded-2xl border border-[#D4AF37]/10 overflow-hidden hover:shadow-lg hover:shadow-[#D4AF37]/6 hover:border-[#D4AF37]/25 transition-all duration-300 h-full flex flex-col">
                          <div className="relative h-56 w-full overflow-hidden">
                            {post.featured_image ? (
                              <Image src={post.featured_image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" loading={index < 3 ? "eager" : "lazy"} unoptimized={post.featured_image.includes('cloudinary')} />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[#5C0F22]/5 via-[#D4AF37]/5 to-[#5C0F22]/5 flex items-center justify-center"><BookOpen className="w-10 h-10 text-[#D4AF37]/20" /></div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            {post.read_time && <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#5C0F22] text-[10px] font-semibold px-2.5 py-1 rounded-full"><Clock className="w-3 h-3" /> {post.read_time}</div>}
                            {post.tags && post.tags.length > 0 && (
                              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">{post.tags.slice(0, 2).map((tag: string) => (<span key={tag} className="text-[10px] px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#5C0F22] rounded-full font-medium">{tag}</span>))}</div>
                            )}
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-3">
                              <div className="flex items-center gap-1"><User className="w-3 h-3 text-[#D4AF37]/60" /><span>{post.author?.split(" ")[0] || "Admin"}</span></div>
                              <span className="text-gray-300">|</span>
                              <div className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#D4AF37]/60" /><span>{new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></div>
                            </div>
                            <h2 className="text-lg font-bold text-[#5C0F22] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug">{post.title}</h2>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                            <div className="bg-gray-50 rounded-lg p-3 mb-4 border-l-2 border-[#D4AF37]/30">
                              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 italic">{post.excerpt ? post.excerpt.substring(0, 180) + (post.excerpt.length > 180 ? "..." : "") : "Click to read the full article."}</p>
                            </div>
                            <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                              <div className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-[#D4AF37]/50" /><span className="text-xs text-gray-500">{post.read_time || "5 min read"}</span></div>
                              <span className="inline-flex items-center gap-1 text-[#5C0F22] text-xs font-semibold group-hover:gap-2 transition-all">Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" /></span>
                            </div>
                          </div>
                          <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
