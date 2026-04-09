"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, X, Image as ImageIcon, Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { FadeIn } from "@/app/components/animations/FadeIn";
import { RichTextEditor } from "@/app/components/blog/RichTextEditor";
import { supabase } from "@/app/lib/supabase";

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [authStatus, setAuthStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    author: "",
    read_time: "",
    tags: [] as string[],
    status: "draft",
    published_at: null as string | null
  });
  const [tagInput, setTagInput] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        setAuthStatus("unauthenticated");
        router.push("/login");
        return;
      }
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();
      
      if (profile && profile.role !== 'ADMIN') {
        setAuthStatus("unauthenticated");
        router.push("/dashboard");
        return;
      }
      
      setUser({ ...session.user, role: profile?.role || 'USER' });
      setAuthStatus("authenticated");
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', params.id)
        .single();
      
      if (error) {
        console.error("Error fetching blog:", error);
        router.push("/admin/blog");
        return;
      }
      
      if (data) {
        setFormData({
          id: data.id,
          title: data.title || "",
          slug: data.slug || "",
          excerpt: data.excerpt || "",
          content: data.content || "",
          featured_image: data.featured_image || "",
          author: data.author || "",
          read_time: data.read_time || "",
          tags: data.tags || [],
          status: data.status || "draft",
          published_at: data.published_at || null
        });
        setImagePreview(data.featured_image || "");
      }
      setIsLoading(false);
    };
    
    fetchBlog();
  }, [params.id, router]);

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

  const handleImageUrl = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      setFormData({ ...formData, featured_image: url });
      setImagePreview(url);
    }
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
      author: formData.author || user?.user_metadata?.name || user?.email || "Admin",
      read_time: formData.read_time || calculateReadTime(formData.content),
      tags: formData.tags,
      status: publish ? "published" : formData.status,
      published_at: publish && formData.status !== "published" ? new Date().toISOString() : formData.published_at
    };
    
    const { data, error } = await supabase
      .from('blogs')
      .update(blogData)
      .eq('id', formData.id)
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
      <div className="min-h-screen bg-[#e7e7e7] dark:bg-[#222222] pt-[72px] md:pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading blog post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e7e7e7] dark:bg-[#222222] pt-[72px] md:pt-20 overflow-x-hidden">
      {/* Header */}
      <section className="w-full bg-gradient-to-r from-primary to-primary-dark py-6 md:py-8">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
              <div>
                <Link href="/admin/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Edit Post</h1>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsPreview(!isPreview)}
                  className="px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-primary transition flex items-center gap-2"
                >
                  {isPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {isPreview ? "Edit" : "Preview"}
                </button>
                <button
                  onClick={() => handleSave(false)}
                  disabled={isSaving}
                  className="px-5 py-2 rounded-full bg-white text-primary hover:bg-gray-100 transition flex items-center gap-2 disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={() => handleSave(true)}
                  disabled={isSaving}
                  className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition flex items-center gap-2 disabled:opacity-50"
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={handleTitleChange}
                    className="w-full px-4 py-3 text-2xl font-bold border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222222] text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter blog title..."
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL Slug</label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 dark:text-gray-400">/blog/</span>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222222] text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="url-slug"
                    />
                  </div>
                </div>

                {/* Featured Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Featured Image</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={formData.featured_image}
                      onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222222] text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="https://example.com/image.jpg"
                    />
                    <button
                      onClick={handleImageUrl}
                      className="px-4 py-2 bg-gray-100 dark:bg-[#333333] rounded-lg hover:bg-gray-200 dark:hover:bg-[#444444] transition"
                    >
                      <ImageIcon className="w-5 h-5" />
                    </button>
                  </div>
                  {imagePreview && (
                    <div className="mt-2 relative h-40 w-full rounded-lg overflow-hidden">
                      <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
                    </div>
                  )}
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Excerpt / Summary</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222222] text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="A short summary of the article..."
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222222] text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Dr. Kwame Asante"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTag()}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#222222] text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Add a tag..."
                    />
                    <button
                      onClick={addTag}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-[#333333] rounded-full text-sm">
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Content *</label>
                  <RichTextEditor content={formData.content} onChange={handleContentChange} />
                </div>
              </div>
            ) : (
              /* Preview Mode */
              <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-8 border border-gray-200 dark:border-[#333333]">
                {formData.featured_image && (
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
                    <img src={formData.featured_image} alt={formData.title} className="object-cover w-full h-full" />
                  </div>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">{formData.title || "Untitled"}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span>{formData.author || "Admin"}</span>
                  <span>{formData.read_time || "2 min read"}</span>
                </div>
                {formData.excerpt && (
                  <div className="text-gray-600 dark:text-gray-400 italic mb-6 border-l-4 border-primary pl-4">
                    {formData.excerpt}
                  </div>
                )}
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none"
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
