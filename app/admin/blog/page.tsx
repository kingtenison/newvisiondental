\"use client";
import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Eye, Loader2 } from "lucide-react";
import Link from "next/link";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/admin/blog");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    await fetch(`/api/admin/blog?id=${id}`, { method: "DELETE" });
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-[#222222] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
          <Link 
            href="/admin/blog/new" 
            className="flex items-center gap-2 bg-[#C1121F] hover:bg-[#a00e18] px-4 py-2 rounded-lg transition-all"
          >
            <Plus size={20} /> Write New Post
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#C1121F]" size={40} /></div>
        ) : (
          <div className="bg-[#2a2a2a] border border-[#333333] rounded-xl overflow-hidden shadow-xl">
            <table className="w-full text-left">
              <thead className="bg-[#333333] text-gray-300">
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333333]">
                {posts.map((post: any) => (
                  <tr key={post.id} className="hover:bg-[#333333]/50 transition-colors">
                    <td className="p-4 font-medium">{post.title}</td>
                    <td className="p-4 text-gray-400">{new Date(post.created_at).toLocaleDateString()}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs ${post.published ? "bg-green-900 text-green-200" : "bg-yellow-900 text-yellow-200"}`}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-3">
                      <Link href={`/blog/${post.slug}`} target="_blank" className="inline-block text-gray-400 hover:text-white"><Eye size={18} /></Link>
                      <Link href={`/admin/blog/edit/${post.id}`} className="inline-block text-blue-400 hover:text-blue-300"><Edit size={18} /></Link>
                      <button onClick={() => deletePost(post.id)} className="text-red-500 hover:text-red-400"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}"\