type Props = { params: { handle: string } };

export default function ProfilePage({ params }: Props) {
  const { handle } = params;
  return (
    <section className="px-4 sm:px-8 py-16 max-w-4xl mx-auto">
      <h1 className="font-gothic text-4xl text-red-600 mb-2">@{handle}</h1>
      <p className="text-gray-400 mb-6">Author profile coming soon… bio, published stories, and stats.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="h-5 w-1/2 bg-zinc-800 rounded mb-3" />
          <div className="h-4 w-1/3 bg-zinc-800 rounded mb-1" />
          <div className="h-16 w-full bg-zinc-900 rounded" />
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="h-5 w-2/3 bg-zinc-800 rounded mb-3" />
          <div className="h-4 w-1/4 bg-zinc-800 rounded mb-1" />
          <div className="h-16 w-full bg-zinc-900 rounded" />
        </div>
      </div>
    </section>
  );
}
