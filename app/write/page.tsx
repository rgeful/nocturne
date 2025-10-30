"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image format (PNG, JPG, GIF, or WebP)');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }
      
      setCoverImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setCoverImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show an alert since we're using static seed data
    alert(`Story "${title}" saved!\n\n(For this MVP, manually add your story to lib/seedStories.ts)`);
    
    // Reset form
    setTitle("");
    setAuthor("");
    setExcerpt("");
    setContent("");
    setTags("");
    setCoverImage(null);
    setPreview(null);
    
    router.push("/browse");
  };

  return (
    <section className="px-4 sm:px-8 py-16 max-w-3xl mx-auto">
      <h1 className="font-gothic text-4xl text-red-600 mb-2">Write a Story</h1>
      <p className="text-gray-400 mb-8">Craft your tale in the shadows. Share your story with the darkness.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent border border-zinc-800 focus:border-red-700 outline-none py-2 px-3 rounded-lg text-gray-200"
              placeholder="Enter your story title…"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full bg-transparent border border-zinc-800 focus:border-red-700 outline-none py-2 px-3 rounded-lg text-gray-200"
              placeholder="Your name or pseudonym"
              required
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Cover Image (Optional)</label>
            
            {preview ? (
              <div className="relative mb-3">
                <img 
                  src={preview} 
                  alt="Cover preview" 
                  className="w-full h-48 object-cover rounded-lg border border-zinc-800"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer hover:border-red-700 transition-colors bg-zinc-950/40">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-400">Click to upload cover image</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF or WebP (MAX. 5MB)</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Short Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full bg-zinc-950/40 border border-zinc-800 rounded-lg p-3 resize-none outline-none focus:border-red-700 text-gray-200"
              placeholder="A brief, haunting teaser…"
              rows={2}
              required
            />
            <p className="text-xs text-gray-500 mt-1">This appears on story cards</p>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-transparent border border-zinc-800 focus:border-red-700 outline-none py-2 px-3 rounded-lg text-gray-200"
              placeholder="horror, paranormal, short (comma-separated)"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Story Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-zinc-950/40 border border-zinc-800 rounded-lg p-4 resize-none outline-none focus:border-red-700 text-gray-200"
              placeholder="Start your tale in the dark…"
              rows={16}
              required
            />
            <p className="text-xs text-gray-500 mt-1">{content.length} characters</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-zinc-800">
            <button 
              type="button"
              onClick={() => router.push("/browse")}
              className="px-4 py-2 rounded-lg border border-zinc-700 text-gray-300 hover:border-red-700 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 rounded-lg bg-red-700 text-white hover:bg-red-600 transition-colors"
            >
              Submit Story
            </button>
          </div>

        </div>
      </form>

      <div className="mt-8 rounded-lg border border-amber-900/30 bg-amber-950/20 p-4">
        <p className="text-sm text-amber-700">
          <strong className="text-amber-600">Note:</strong> This is an MVP version. To add your story to the site, 
          manually add it to <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-xs">lib/seedStories.ts</code> 
          after submission.
        </p>
      </div>
    </section>
  );
}
  