import Link from "next/link";
import Image from "next/image";

export default function StoryCard(
  { id, title, author, excerpt, tags, coverImage }:
  { id: string; title: string; author: string; excerpt: string; tags: string[]; coverImage?: string }
) {
  return (
    <Link href={`/story/${id}`}>
      <article className="bg-zinc-900/60 border border-zinc-800 rounded-xl hover:border-red-700 transition overflow-hidden">
        {coverImage && (
          <div className="relative w-full h-48 overflow-hidden bg-zinc-900 flex items-center justify-center">
            <Image
              src={coverImage}
              alt={`${title} cover`}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-gothic text-xl text-red-500">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">by {author}</p>
          <p className="text-gray-500 mt-2 text-sm line-clamp-2">{excerpt}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-gray-300">{t}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
