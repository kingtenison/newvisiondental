\"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, X, Image as ImageIcon, Loader2 } from "lucide-react";

export default function NewBlogPost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    published: false,
    author: "Admin"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/admin/blog", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    router.push("/admin/blog");
    router.refresh();
  };

  // Basic auto-slug generator
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({ 
      ...formData, 
      title, 
      slug: title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") 
    });
  };

  return (
    <div className="min-h-screen bg-[#222222] text-white p-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#C1121F]">Create New Post</h1>
          <div className="flex gap-4">
            <button type="button" onClick={() => router.back()} className="px-4 py-2 bg-[#333] rounded-lg">Cancel</button>
            <button 
              type="submit" 
              disabled={loading}
              className="flex items-center gap-2 bg-[#2E7D32] px-6 py-2 rounded-lg hover:bg-green-700 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} Publish Post
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <input
              type="text"
              placeholder="Post Title"
              className="w-full bg-[#2a2a2a] border border-[#333] p-4 rounded-xl text-2xl font-bold focus:border-[#C1121F] outline-none"
              onChange={handleTitleChange}
              required
            />
            
            <textarea
              placeholder="Start writing your content here..."
              className="w-full bg-[#2a2a2a] border border-[#333] p-4 rounded-xl h-96 focus:border-[#C1121F] outline-none resize-none"
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              required
            />
          </div>

          <div className="space-y-6">
            <div className="bg-[#2a2a2a] p-4 rounded-xl border border-[#333] space-y-4">
               <label className="block text-sm font-medium text-gray-400">Featured Image URL</label>
               <input 
                  type="text" 
                  className="w-full bg-[#333] p-2 rounded border border-[#444]"
                  placeholder="Paste Cloudinary URL"
                  onChange={(e) => setFormData({...formData, featured_image: e.target.value})}
               />
               <div className="aspect-video bg-[#333] rounded-lg flex items-center justify-center border-2 border-dashed border-[#444]">
                  {formData.featured_image ? <img src={formData.featured_image} className="h-full w-full object-cover rounded-lg" /> : <ImageIcon className="text-gray-500" />}
               </div>
            </div>

            <div className="bg-[#2a2a2a] p-4 rounded-xl border border-[#333] space-y-4">
               <label className="block text-sm font-medium text-gray-400">Excerpt (Short Summary)</label>
               <textarea 
                  className="w-full bg-[#333] p-2 rounded border border-[#444] h-24"
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
               />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}"\