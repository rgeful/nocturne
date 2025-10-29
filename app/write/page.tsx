export default function WritePage() {
    return (
      <section className="px-4 sm:px-8 py-16 max-w-3xl mx-auto">
        <h1 className="font-gothic text-4xl text-red-600 mb-2">Write a Story</h1>
        <p className="text-gray-400 mb-6">Markdown/Rich-text editor coming soon. For now, this is a placeholder.</p>
  
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <input
            className="w-full bg-transparent border-b border-zinc-800 focus:border-red-700 outline-none py-2 mb-4"
            placeholder="Story title…"
          />
          <textarea
            className="w-full h-56 bg-zinc-950/40 border border-zinc-800 rounded-lg p-4 resize-none outline-none focus:border-red-700"
            placeholder="Start your tale in the dark…"
          />
          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-zinc-700 text-gray-300">Save draft (stub)</button>
            <button className="px-4 py-2 rounded-lg bg-red-700 text-white">Publish (stub)</button>
          </div>
        </div>
      </section>
    );
  }
  