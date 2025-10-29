// app/browse/page.tsx (core idea)
"use client";
import { useMemo, useState } from "react";
import { SEED_STORIES } from "@/lib/seedStories";
import StoryCard from "@/components/StoryCard";

export default function BrowsePage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string|undefined>();
  const tags = useMemo(() => [...new Set(SEED_STORIES.flatMap(s => s.tags))], []);
  const results = SEED_STORIES.filter(s =>
    (!tag || s.tags.includes(tag)) &&
    (q === "" || (s.title + s.author + s.excerpt).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <section className="px-4 sm:px-8 py-16">
      <h1 className="font-gothic text-4xl text-red-600 mb-4">Browse</h1>

      <div className="flex flex-wrap gap-3 items-center">
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Search titles, authors, tags…"
          className="bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-gray-200"
        />
        <div className="flex flex-wrap gap-2">
          <button onClick={()=>setTag(undefined)} className={`px-2 py-1 rounded border ${!tag?'border-red-700 text-red-500':'border-zinc-700 text-gray-300'}`}>All</button>
          {tags.map(t=>(
            <button key={t} onClick={()=>setTag(t)}
              className={`px-2 py-1 rounded border ${tag===t?'border-red-700 text-red-500':'border-zinc-700 text-gray-300'}`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {results.map(s => (
          <StoryCard key={s.id} id={s.id} title={s.title} author={s.author} excerpt={s.excerpt} tags={s.tags}/>
        ))}
      </div>

      {results.length===0 && <p className="text-gray-500 mt-6">Nothing matched. Try another keyword or tag.</p>}
    </section>
  );
}
