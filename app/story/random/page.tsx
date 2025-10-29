import { SEED_STORIES } from "@/lib/seedStories";
import { redirect } from "next/navigation";

export default function RandomStory() {
  const i = Math.floor(Math.random() * SEED_STORIES.length);
  redirect(`/story/${SEED_STORIES[i].id}`);
}
