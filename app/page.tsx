import Image from "next/image";
import { SEED_STORIES } from "@/lib/seedStories";
import StoryCard from "@/components/StoryCard";

export default function HomePage() {
  return (
    <main className="px-4 sm:px-8">
      <section className="flex flex-col items-center justify-center h-[80vh] text-center">
        <div className="relative mb-6">
          <Image
            src="/nocturne-logo.svg"
            alt="Nocturne Logo"
            width={800}
            height={267}
            priority
            className="drop-shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:drop-shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 w-full max-w-3xl"
          />
        </div>

        <p className="font-sans text-gray-400 text-lg max-w-xl">
          Modern home for creepypastas, urban legends, horror stories
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/browse"
            className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Browse Stories
          </a>
          <a
            href="/write"
            className="border border-red-700 text-red-600 hover:bg-red-700 hover:text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Write a Story
          </a>
        </div>

        <div className="mt-4 text-xs text-gray-600">
          No ads · Curated · Simple
        </div>
      </section>

      <section className="mt-12 sm:mt-20">
  <h2 className="font-gothic text-2xl sm:text-3xl text-red-600 mb-4 text-center">
    Featured Tonight
  </h2>
  {SEED_STORIES.length === 0 ? (
    <p className="text-gray-500 text-center">No stories yet — but the shadows are stirring...</p>
  ) : (
    <div className="grid gap-4 sm:grid-cols-3">
      {SEED_STORIES.slice(0, 3).map((story) => (
        <StoryCard
          key={story.id}
          id={story.id}
          title={story.title}
          author={story.author}
          excerpt={story.excerpt}
          tags={story.tags}
          coverImage={story.coverImage}
        />
      ))}
    </div>
  )}
</section>

      <footer className="mt-20 sm:mt-24 py-10 text-center text-sm text-gray-600 border-t border-zinc-800">
        <p>
          © {new Date().getFullYear()} Nocturne — No ads. No noise. Just stories.
        </p>
        <div className="mt-2 space-x-4">
          <a href="/browse" className="hover:text-red-500">Browse</a>
          <a href="/guidelines" className="hover:text-red-500">Guidelines</a>
          <a href="/about" className="hover:text-red-500">About</a>
          <a href="/write" className="hover:text-red-500">Contact</a>
        </div>
      </footer>
    </main>
  );
}
