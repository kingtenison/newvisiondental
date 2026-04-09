"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, X, Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { RichTextEditor } from "@/app/components/blog/RichTextEditor";
import { ImageUpload } from "@/app/components/blog/ImageUpload";
import { supabase } from "@/app/lib/supabase";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    author: "",
    read_time: "",
    tags: [] as string[],
    status: "draft"
  });
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        router.push("/login");
        return;
      }
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
      
      if (profile?.role !== 'ADMIN') {
        router.push("/dashboard");
        return;
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, [router]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    });
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  };

  const handleContentChange = (content: string) => {
    const readTime = calculateReadTime(content);
    setFormData({
      ...formData,
      content,
      read_time: readTime
    });
  };

  const handleSave = async (publish: boolean = false) => {
    setIsSaving(true);
    setError("");
    
    if (!formData.title.trim()) {
      setError("Title is required");
      setIsSaving(false);
      return;
    }
    
    if (!formData.content.trim()) {
      setError("Content is required");
      setIsSaving(false);
      return;
    }
    
    const blogData = {
      title: formData.title.trim(),
      slug: formData.slug || generateSlug(formData.title),
      excerpt: formData.excerpt || formData.content.replace(/<[^>]*>/g, '').substring(0, 200),
      content: formData.content,
      featured_image: formData.featured_image || null,
      author: formData.author || "Admin",
      read_time: formData.read_time || calculateReadTime(formData.content),
      tags: formData.tags,
      status: publish ? "published" : "draft",
      published_at: publish ? new Date().toISOString() : null
    };
    
    const { data, error } = await supabase
      .from('blogs')
      .insert([blogData])
      .select();
    
    setIsSaving(false);
    
    if (error) {
      setError(`Failed to save: ${error.message}`);
    } else {
      router.push("/admin/blog");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="w-full bg-gradient-to-r from-[#5C0F22] to-[#4a0c1b] py-6 md:py-8">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
              <div>
                <Link href="/admin/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] mb-2 transition">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Write New Post</h1>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsPreview(!isPreview)}
                  className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition flex items-center gap-2"
                >
                  {isPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {isPreview ? "Edit" : "Preview"}
                </button>
                <button
                  onClick={() => handleSave(false)}
                  disabled={isSaving}
                  className="px-5 py-2 rounded-full bg-white text-[#5C0F22] hover:bg-white/90 transition flex items-center gap-2 disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? "Saving..." : "Save Draft"}
                </button>
                <button
                  onClick={() => handleSave(true)}
                  disabled={isSaving}
                  className="px-5 py-2 rounded-full bg-[#D4AF37] text-[#1a0a10] hover:bg-[#E8C547] transition flex items-center gap-2 disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? "Publishing..." : "Publish"}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 mt-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-5xl mx-auto">
            {error}
          </div>
        </div>
      )}

      {/* Content */}
      <section className="w-full py-8">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-5xl mx-auto">
            {!isPreview ? (
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-[#5C0F22] mb-2">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={handleTitleChange}
                    className="w-full px-4 py-3 text-2xl font-bold border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50"
                    placeholder="Enter blog title..."
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium text-[#5C0F22] mb-2">URL Slug</label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">/blog/</span>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="flex-1 px-4 py-2 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                      placeholder="url-slug"
                    />
                  </div>
                </div>

                {/* Featured Image with Upload */}
                <div>
                  <label className="block text-sm font-medium text-[#5C0F22] mb-2">Featured Image</label>
                  <ImageUpload
                    onUpload={(url) => setFormData({ ...formData, featured_image: url })}
                    currentImage={formData.featured_image}
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-[#5C0F22] mb-2">Excerpt / Summary</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                    placeholder="A short summary of the article..."
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-[#5C0F22] mb-2">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                    placeholder="Dr. Kwame Asante"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-[#5C0F22] mb-2">Tags</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTag()}
                      className="flex-1 px-4 py-2 border-2 border-[#D4AF37]/20 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                      placeholder="Add a tag..."
                    />
                    <button
                      onClick={addTag}
                      className="px-4 py-2 bg-[#5C0F22] text-white rounded-lg hover:bg-[#7a1830] transition"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-[#D4AF37]/10 rounded-full text-sm text-[#5C0F22]">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="hover:text-red-500">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Editor */}
                <div>
                  <label className="block text-sm font-medium text-[#5C0F22] mb-2">Content *</label>
                  <RichTextEditor content={formData.content} onChange={handleContentChange} />
                </div>
              </div>
            ) : (
              /* Preview Mode */
              <div className="bg-white rounded-2xl p-8 border border-[#D4AF37]/20">
                {formData.featured_image && (
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
                    <img src={formData.featured_image} alt={formData.title} className="object-cover w-full h-full" />
                  </div>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-[#5C0F22] mb-4">{formData.title || "Untitled"}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="text-[#5C0F22]">{formData.author || "Admin"}</span>
                  <span>{formData.read_time || "2 min read"}</span>
                </div>
                {formData.excerpt && (
                  <div className="text-gray-600 italic mb-6 border-l-4 border-[#D4AF37] pl-4">
                    {formData.excerpt}
                  </div>
                )}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: formData.content || "<p>No content yet...</p>" }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
