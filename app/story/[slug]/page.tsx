import { SEED_STORIES } from "@/lib/seedStories";

type Props = { params: { slug: string } };

export default function StoryPage({ params }: Props) {
  const story = SEED_STORIES.find(s => s.id === params.slug);
  if (!story) {
    return (
      <section className="px-4 sm:px-8 py-16 max-w-3xl mx-auto text-center">
        <h1 className="font-gothic text-3xl text-red-600 mb-2">Story not found</h1>
        <a href="/browse" className="text-red-500 hover:underline">Back to Browse</a>
      </section>
    );
  }

  return (
    <article className="px-4 sm:px-8 py-16 max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="font-gothic text-4xl text-red-600">{story.title}</h1>
        <p className="text-gray-500 mt-1">by <span className="text-gray-300">{story.author}</span> • {story.date}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {story.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-gray-300">{t}</span>)}
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        <p className="text-gray-200 leading-7 whitespace-pre-wrap">{story.content}</p>
      </div>

      <footer className="mt-8 flex gap-3">
        <button className="px-3 py-1.5 rounded-lg border border-zinc-700 text-gray-300">🩸</button>
        <button className="px-3 py-1.5 rounded-lg border border-zinc-700 text-gray-300">🕯️</button>
        <button className="px-3 py-1.5 rounded-lg border border-zinc-700 text-gray-300">👁️</button>
      </footer>
    </article>
  );
}
