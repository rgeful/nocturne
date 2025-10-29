import { SEED_STORIES } from "@/lib/seedStories";
import StoryCard from "@/components/StoryCard";

export default function BrowsePage() {
  return (
    <section className="px-4 sm:px-8 py-16">
      <h1 className="font-gothic text-4xl text-red-600 mb-6">Browse</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SEED_STORIES.map(s => (
          <StoryCard key={s.id} id={s.id} title={s.title} author={s.author} excerpt={s.excerpt} tags={s.tags} />
        ))}
      </div>
    </section>
  );
}
