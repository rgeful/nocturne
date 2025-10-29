export type SeedStory = {
    id: string; title: string; author: string;
    tags: string[]; excerpt: string; content: string; date: string;
  };
  
  export const SEED_STORIES: SeedStory[] = [
    {
      id: "the-room-without-reflections",
      title: "The Room Without Reflections",
      author: "Anonymous",
      tags: ["paranormal","short"],
      excerpt: "I looked into the mirror—and nothing looked back.",
      content: `I looked into the mirror—and nothing looked back... (full text here)`,
      date: "2025-10-27",
    },
    {
      id: "voice-in-the-static",
      title: "The Voice in the Static",
      author: "Unknown Frequency",
      tags: ["analog-horror","audio"],
      excerpt: "Every night at 3:07 a.m. the radio whispers my name.",
      content: `Every night at 3:07 a.m... (full text here)`,
      date: "2025-10-25",
    },
    {
      id: "do-not-open-the-third-drawer",
      title: "Do Not Open the Third Drawer",
      author: "Caretaker",
      tags: ["psychological","short"],
      excerpt: "The first two drawers held socks. The third held me.",
      content: `The first two drawers... (full text here)`,
      date: "2025-10-20",
    },
  ];
  