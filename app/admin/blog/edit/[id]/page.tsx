\"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Save, Image as ImageIcon, Loader2, Upload, ArrowLeft } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

export default function EditBlogPost() {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    published: false,
  });

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/admin/blog?id=${id}`);
      const data = await res.json();
      // If the API returns an array, find the specific post
      const post = Array.isArray(data) ? data.find((p: any) => p.id === id) : data;
      if (post) setFormData(post);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/admin/blog", {
      method: "PUT",
      body: JSON.stringify({ id, ...formData }),
    });
    setSaving(false);
    router.push("/admin/blog");
    router.refresh();
  };

  if (loading) return <div className="min-h-screen bg-[#222222] flex items-center justify-center"><Loader2 className="animate-spin text-[#C1121F]" size={40} /></div>;

  return (
    <div className="min-h-screen bg-[#222222] text-white p-8">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <button type="button" onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 hover:text-white transition-all">
            <ArrowLeft size={20} /> Back to List
          </button>
          <button 
            type="submit" 
            disabled={saving}
            className="flex items-center gap-2 bg-[#2E7D32] px-6 py-2 rounded-lg hover:bg-green-700 transition-all disabled:opacity-50"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} Update Post
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <input
              type="text"
              value={formData.title}
              className="w-full bg-[#2a2a2a] border border-[#333] p-4 rounded-xl text-2xl font-bold focus:border-[#C1121F] outline-none"
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
            <textarea
              value={formData.content}
              className="w-full bg-[#2a2a2a] border border-[#333] p-4 rounded-xl h-[500px] focus:border-[#C1121F] outline-none resize-none"
              onChange={(e) => setFormData({...formData, content: e.target.value})}
            />
          </div>

          <div className="space-y-6">
            <div className="bg-[#2a2a2a] p-5 rounded-xl border border-[#333] space-y-4">
               <label className="block text-sm font-medium text-gray-400">Featured Image</label>
               <CldUploadWidget 
                 uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                 onSuccess={(result: any) => setFormData({ ...formData, featured_image: result.info.secure_url })}
               >
                 {({ open }) => (
                   <button type="button" onClick={() => open()} className="w-full py-3 bg-[#333] border border-dashed border-[#555] rounded-lg flex items-center justify-center gap-2">
                     <Upload size={18} className="text-[#C1121F]" /> Change Image
                   </button>
                 )}
               </CldUploadWidget>
               {formData.featured_image && <img src={formData.featured_image} className="w-full aspect-video object-cover rounded-lg border border-[#444]" />}
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-xl border border-[#333] flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">Status: {formData.published ? "Published" : "Draft"}</span>
              <button
                type="button"
                onClick={() => setFormData({...formData, published: !formData.published})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.published ? "bg-[#2E7D32]" : "bg-gray-600"}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.published ? "translate-x-6" : "translate-x-1"}`} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}"\