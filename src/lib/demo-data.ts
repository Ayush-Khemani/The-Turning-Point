import type { Post } from "@/lib/types";

export const demoPosts: Post[] = [
  {
    _id: "post-clarity",
    title: "Clarity Usually Arrives After Courage, Not Before It",
    slug: "clarity-after-courage",
    excerpt:
      "Some of the most important decisions in life do not become clear until we start moving. Action is often the thing that creates understanding.",
    publishedAt: "2026-03-18",
    featured: true,
    category: "Growth",
    tags: ["clarity", "courage", "self-trust"],
    author: {
      name: "Ayush Khemani",
      role: "Writer",
    },
    accent: {
      from: "#d97757",
      to: "#f4c271",
    },
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "We often wait for certainty before we begin. But most worthwhile things do not reveal themselves from a distance. They reveal themselves while we are inside the work, the discomfort, and the becoming.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "The myth of perfect readiness" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Readiness is frequently overrated. A better question is whether the next honest step is visible. If it is, then that is enough. We can allow the larger path to emerge later.",
          },
        ],
      },
      {
        _type: "block",
        style: "blockquote",
        children: [
          {
            _type: "span",
            text: "Clarity is often the reward for movement, not the prerequisite.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-attention",
    title: "Your Attention Is Building a Life, Whether You Notice It or Not",
    slug: "your-attention-is-building-a-life",
    excerpt:
      "Attention is not just a mental resource. It is a moral and emotional force that shapes what becomes real in our days.",
    publishedAt: "2026-02-28",
    category: "Psychology",
    tags: ["attention", "habits", "mindfulness"],
    author: {
      name: "Ayush Khemani",
      role: "Writer",
    },
    accent: {
      from: "#4c6b6a",
      to: "#b7d1c6",
    },
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "We become shaped by what repeatedly occupies the foreground of our mind. The things we return to each day begin to define our emotional climate, our standards, and eventually our identity.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Attention is rehearsal" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Every repeated thought is a rehearsal. Every rehearsed thought becomes easier to reach. That means your feed, your conversations, and even your private rumination are all participating in the architecture of your future self.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-belonging",
    title: "Belonging Is Not the Same Thing as Being Understood",
    slug: "belonging-is-not-the-same-as-being-understood",
    excerpt:
      "We sometimes confuse visibility with intimacy. Real belonging often includes being seen imperfectly and staying anyway.",
    publishedAt: "2026-02-07",
    category: "Relationships",
    tags: ["belonging", "relationships", "identity"],
    author: {
      name: "Ayush Khemani",
      role: "Writer",
    },
    accent: {
      from: "#8a5879",
      to: "#ddc0d1",
    },
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "To be understood is beautiful, but it is not always available. To belong is deeper. It means we are still held with dignity even where language runs out.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Mature relationships create room for mystery. They allow us to remain complex, unfinished, and still welcome.",
          },
        ],
      },
    ],
  },
  {
    _id: "post-enough",
    title: "A Quiet Life Can Still Be an Extraordinary One",
    slug: "a-quiet-life-can-still-be-an-extraordinary-one",
    excerpt:
      "There is a subtle kind of courage in refusing spectacle and choosing depth, steadiness, and inner coherence.",
    publishedAt: "2026-01-19",
    category: "Life",
    tags: ["meaning", "simplicity", "inner-life"],
    author: {
      name: "Ayush Khemani",
      role: "Writer",
    },
    accent: {
      from: "#56627a",
      to: "#c0cadc",
    },
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Not every meaningful life is loud. Some lives are built through daily acts of thoughtfulness, restraint, devotion, and attention to what matters most.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Depth over display" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The world rewards visibility, but the soul is often formed in places with no applause. A quiet life is not a failed dramatic life. It can be a deliberate masterpiece of alignment.",
          },
        ],
      },
    ],
  },
];
