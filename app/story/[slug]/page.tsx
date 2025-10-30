import { SEED_STORIES } from "@/lib/seedStories";
import ReactionsAndComments from "@/components/ReactionsAndComments";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = SEED_STORIES.find(s => s.id === slug);
  if (!story) {
    return (
      <section className="px-4 sm:px-8 py-16 max-w-3xl mx-auto text-center">
        <h1 className="font-gothic text-3xl text-red-600 mb-2">Story not found</h1>
        <a href="/browse" className="text-red-500 hover:underline">Back to Browse</a>
      </section>
    );
  }

  const currentIndex = SEED_STORIES.findIndex(s => s.id === slug);
  const prevStory = currentIndex > 0 ? SEED_STORIES[currentIndex - 1] : null;
  const nextStory = currentIndex < SEED_STORIES.length - 1 ? SEED_STORIES[currentIndex + 1] : null;

  return (
    <article className="px-4 sm:px-8 py-16 max-w-3xl mx-auto">
      <header className="mb-6">
        {story.coverImage && (
          <div className="relative w-full h-64 sm:h-80 mb-6 rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center">
            <Image
              src={story.coverImage}
              alt={`${story.title} cover`}
              fill
              className="object-contain"
              priority
            />
          </div>
        )}
        <h1 className="font-gothic text-4xl text-red-600">{story.title}</h1>
        <p className="text-gray-500 mt-1">by <span className="text-gray-300">{story.author}</span> • {story.date}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {story.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-gray-300">{t}</span>)}
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-200 leading-7 whitespace-pre-wrap">{story.content}</p>
      </div>

      {/* Reactions and Comments */}
      <ReactionsAndComments storyId={story.id} />

      <footer className="mt-8">
        <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
          {prevStory ? (
            <a 
              href={`/story/${prevStory.id}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              <span className="max-w-[200px] truncate">{prevStory.title}</span>
            </a>
          ) : (
            <div></div>
          )}
          
          {nextStory ? (
            <a 
              href={`/story/${nextStory.id}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors group ml-auto"
            >
              <span className="max-w-[200px] truncate">{nextStory.title}</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </footer>
    </article>
  );
}
