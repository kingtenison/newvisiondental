"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, Upload, Trash2, ArrowLeft, Plus,
  Sparkles, AlertCircle, Check, X, Image as ImageIcon
} from "lucide-react";
import { supabase } from "@/app/lib/supabase";

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image_url: string;
  is_before_after: boolean;
  created_at: string;
}

const categories = ["Whitening", "Implants", "Orthodontics", "Cosmetic", "Endodontics", "Cleaning", "General"];

export default function AdminGalleryPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<any>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Upload form state
  const [uploadForm, setUploadForm] = useState({
    title: "",
    category: "General",
    isBeforeAfter: false,
    file: null as File | null,
    preview: ""
  });

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
      
      setUser(session.user);
      fetchImages();
    };
    
    checkAuth();
  }, [router]);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setImages(data);
    }
    setIsLoading(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadForm({
        ...uploadForm,
        file,
        preview: URL.createObjectURL(file)
      });
    }
  };

  const handleUpload = async () => {
    if (!uploadForm.file || !uploadForm.title) return;

    setIsUploading(true);
    setUploadProgress("Uploading image...");

    try {
      const fileExt = uploadForm.file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `gallery/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, uploadForm.file);

      if (uploadError) {
        if (uploadError.message?.includes('Bucket') || uploadError.message?.includes('not found')) {
          throw new Error('STORAGE_BUCKET_MISSING');
        }
        throw uploadError;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      // Save to gallery table
      const { error: dbError } = await supabase
        .from('gallery')
        .insert({
          title: uploadForm.title,
          category: uploadForm.category,
          image_url: urlData.publicUrl,
          is_before_after: uploadForm.isBeforeAfter
        });

      if (dbError) throw dbError;

      setUploadProgress("Upload complete!");
      setTimeout(() => {
        setShowUploadModal(false);
        setUploadForm({ title: "", category: "General", isBeforeAfter: false, file: null, preview: "" });
        setUploadProgress("");
        fetchImages();
      }, 1000);

    } catch (error: any) {
      if (error.message === 'STORAGE_BUCKET_MISSING') {
        setUploadProgress("BUCKET_MISSING");
      } else {
        setUploadProgress(`Error: ${error.message}`);
      }
    }

    setIsUploading(false);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    try {
      // Delete from database
      const { error: dbError } = await supabase
        .from('gallery')
        .delete()
        .eq('id', id);

      if (dbError) throw dbError;

      // Delete from storage
      const path = imageUrl.split('/').slice(-2).join('/');
      await supabase.storage.from('images').remove([path]);

      setImages(images.filter(img => img.id !== id));
      setDeleteConfirm(null);

    } catch (error: any) {
      alert(`Error deleting: ${error.message}`);
    }
  };

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e7e7e7] pt-[72px] md:pt-20 overflow-x-hidden">

      {/* Header */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5C0F22] via-[#4a0c1b] to-[#5C0F22]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-10 md:py-14">
          <Link href="/admin" className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4AF37] text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Gallery Manager</h1>
              <p className="text-white/60 text-sm">{images.length} images uploaded</p>
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1a0a10] text-sm font-semibold rounded-full hover:bg-[#E8C547] transition-colors shadow-lg shadow-[#D4AF37]/25"
            >
              <Plus className="w-4 h-4" />
              Upload Image
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full bg-[#e7e7e7] py-6">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#D4AF37] text-[#1a0a10] shadow-sm"
                    : "bg-gray-50 text-gray-600 border border-[#D4AF37]/15 hover:border-[#D4AF37]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-6 pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-[#D4AF37]/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#5C0F22] mb-2">No Images Yet</h3>
              <p className="text-gray-500 mb-6">Upload your first gallery image to get started</p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C0F22] text-white rounded-full text-sm font-semibold hover:bg-[#7a1830] transition-colors"
              >
                <Upload className="w-4 h-4" />
                Upload Image
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group relative bg-white rounded-xl border border-[#D4AF37]/10 overflow-hidden hover:shadow-lg hover:border-[#D4AF37]/25 transition-all"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.image_url}
                      alt={image.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover"
                    />
                    {/* Delete overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {deleteConfirm === image.id ? (
                        <div className="text-center">
                          <p className="text-white text-sm mb-3">Delete this image?</p>
                          <div className="flex gap-2 justify-center">
                            <button
                              onClick={() => handleDelete(image.id, image.image_url)}
                              className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Delete
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="px-4 py-2 bg-white/20 text-white text-sm rounded-lg hover:bg-white/30 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(image.id)}
                          className="w-10 h-10 bg-red-600/80 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                    {/* Before/After badge */}
                    {image.is_before_after && (
                      <span className="absolute top-2 left-2 bg-[#D4AF37] text-[#1a0a10] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        B&A
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-semibold text-[#5C0F22] truncate">{image.title}</h4>
                    <p className="text-xs text-gray-500">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4"
            onClick={() => !isUploading && setShowUploadModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[#5C0F22]">Upload Image</h2>
                <button
                  onClick={() => !isUploading && setShowUploadModal(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                {/* File picker */}
                <div
                  onClick={() => !isUploading && fileInputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                    uploadForm.preview 
                      ? "border-[#D4AF37]/30 bg-[#D4AF37]/5" 
                      : "border-gray-200 hover:border-[#D4AF37]/30 hover:bg-gray-50"
                  }`}
                >
                  {uploadForm.preview ? (
                    <div className="relative w-full h-40 rounded-lg overflow-hidden">
                      <Image src={uploadForm.preview} alt="Preview" fill className="object-cover" />
                    </div>
                  ) : (
                    <>
                      <ImageIcon className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500">Click to select an image</p>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB</p>
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image Title</label>
                  <input
                    type="text"
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 transition text-sm"
                    placeholder="e.g. Teeth Whitening Result"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#5C0F22]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C0F22]/15 focus:border-[#5C0F22]/40 transition text-sm bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Before & After toggle */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={() => setUploadForm({ ...uploadForm, isBeforeAfter: !uploadForm.isBeforeAfter })}
                    className={`w-10 h-6 rounded-full transition-colors relative ${
                      uploadForm.isBeforeAfter ? "bg-[#D4AF37]" : "bg-gray-200"
                    }`}
                  >
                    <div className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform shadow ${
                      uploadForm.isBeforeAfter ? "translate-x-[18px]" : "translate-x-0.5"
                    }`} />
                  </div>
                  <span className="text-sm text-gray-700">Before & After comparison</span>
                </label>

                {/* Progress */}
                {uploadProgress && uploadProgress !== "BUCKET_MISSING" && (
                  <div className={`text-sm p-3 rounded-lg ${
                    uploadProgress.startsWith("Error") 
                      ? "bg-red-50 text-red-600" 
                      : uploadProgress === "Upload complete!" 
                        ? "bg-green-50 text-green-600" 
                        : "bg-blue-50 text-blue-600"
                  }`}>
                    {uploadProgress}
                  </div>
                )}

                {/* Bucket missing guide */}
                {uploadProgress === "BUCKET_MISSING" && (
                  <div className="text-sm p-4 rounded-lg bg-red-50 text-red-600 border border-red-200">
                    <p className="font-semibold mb-2">Storage bucket not found</p>
                    <p className="text-red-500 text-xs mb-2">Create an <code className="bg-red-100 px-1 rounded">images</code> bucket in your Supabase dashboard:</p>
                    <ol className="text-xs text-red-500 space-y-1 list-decimal list-inside">
                      <li>Go to <strong>Storage</strong> in your Supabase dashboard</li>
                      <li>Click <strong>New Bucket</strong></li>
                      <li>Name it <code className="bg-red-100 px-1 rounded">images</code></li>
                      <li>Check <strong>Public bucket</strong></li>
                      <li>Click <strong>Create</strong></li>
                    </ol>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 p-6 border-t border-gray-100">
                <button
                  onClick={() => setShowUploadModal(false)}
                  disabled={isUploading}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={isUploading || !uploadForm.file || !uploadForm.title}
                  className="flex-1 px-4 py-3 bg-[#5C0F22] text-white rounded-xl font-semibold text-sm hover:bg-[#7a1830] transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  {isUploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
