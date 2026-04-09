"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, ArrowLeft, Search, X, FileText } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { router.push("/login"); return; }
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
      if (profile && profile.role !== 'ADMIN') { router.push("/dashboard"); return; }
      fetchPosts();
    };
    checkAuth();
  }, [router]);

  const fetchPosts = async () => {
    const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
    if (data) setPosts(data);
    setIsLoading(false);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const confirmDelete = async () => {
    if (postToDelete) {
      await supabase.from('blogs').delete().eq('id', postToDelete.id);
      setPosts(posts.filter(p => p.id !== postToDelete.id));
      setShowDeleteModal(false);
    }
  };

  if (isLoading) return <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 flex items-center justify-center"><div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <Link href="/admin" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-4 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Dashboard</Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div><h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Manage Blog Posts</h1><p className="text-white/60 text-sm">{posts.length} total posts</p></div>
            <Link href="/admin/blog/new" className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8C547] transition-colors shadow-lg shadow-[#D4AF37]/25"><Plus className="w-4 h-4" /> Write New Post</Link>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50" />
                <input type="text" placeholder="Search posts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2.5 border-2 border-[#5C0F22]/15 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 text-sm w-64" />
              </div>
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 border-2 border-[#5C0F22]/15 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 text-sm">
                <option value="all">All Posts</option>
                <option value="published">Published</option>
                <option value="draft">Drafts</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden border border-[#5C0F22]/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    {["Title", "Author", "Date", "Views", "Status", "Actions"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-white transition">
                      <td className="px-5 py-3.5">
                        <p className="text-sm font-medium text-[#5C0F22] line-clamp-1">{post.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{post.excerpt}</p>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{post.author || "Admin"}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{post.published_at ? new Date(post.published_at).toLocaleDateString() : "—"}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600">{post.views || 0}</td>
                      <td className="px-5 py-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${post.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {post.status === "published" ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1">
                          <Link href={`/blog/${post.slug}`} target="_blank" className="p-1.5 text-gray-400 hover:text-[#D4AF37] transition rounded-lg hover:bg-[#D4AF37]/5"><Eye className="w-4 h-4" /></Link>
                          <Link href={`/admin/blog/${post.id}/edit`} className="p-1.5 text-gray-400 hover:text-[#D4AF37] transition rounded-lg hover:bg-[#D4AF37]/5"><Edit className="w-4 h-4" /></Link>
                          <button onClick={() => { setPostToDelete(post); setShowDeleteModal(true); }} className="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-[#D4AF37]/20 mx-auto mb-3" />
                <p className="text-gray-500">No blog posts found</p>
                <Link href="/admin/blog/new" className="inline-flex items-center gap-2 text-[#5C0F22] mt-4 hover:text-[#D4AF37] font-medium"><Plus className="w-4 h-4" /> Create your first post</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {showDeleteModal && postToDelete && (
        <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4" onClick={() => setShowDeleteModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#5C0F22]/15 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#5C0F22]">Delete Post</h2>
              <button onClick={() => setShowDeleteModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"><X className="w-4 h-4 text-gray-500" /></button>
            </div>
            <p className="text-gray-600 mb-6">Are you sure you want to delete "<span className="font-medium text-[#5C0F22]">{postToDelete.title}</span>"? This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-medium text-sm hover:bg-gray-50 transition">Cancel</button>
              <button onClick={confirmDelete} className="flex-1 bg-red-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-red-700 transition">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
