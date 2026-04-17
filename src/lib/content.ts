import { cache } from "react";

import { demoPosts } from "@/lib/demo-data";
import type { Post } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { hasSanityConfig } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";

function withAccents(posts: Omit<Post, "accent">[] | Post[]) {
  const palette = [
    { from: "#d97757", to: "#f4c271" },
    { from: "#4c6b6a", to: "#b7d1c6" },
    { from: "#8a5879", to: "#ddc0d1" },
    { from: "#56627a", to: "#c0cadc" },
  ];

  return posts.map((post, index) => ({
    ...post,
    accent:
      "accent" in post && post.accent ? post.accent : palette[index % palette.length],
    tags: post.tags || [],
    category: post.category || "Essays",
    author: post.author || { name: "Ayush Khemani", role: "Writer" },
  }));
}

export const getAllPosts = cache(async () => {
  if (!hasSanityConfig) {
    return demoPosts;
  }

  try {
    const posts = await client.fetch<Omit<Post, "accent">[]>(POSTS_QUERY);
    if (!posts?.length) {
      return demoPosts;
    }

    return withAccents(posts);
  } catch {
    return demoPosts;
  }
});

export const getPostBySlug = cache(async (slug: string) => {
  if (!hasSanityConfig) {
    return demoPosts.find((post) => post.slug === slug) || null;
  }

  try {
    const post = await client.fetch<Omit<Post, "accent"> | null>(POST_QUERY, {
      slug,
    });

    if (!post) {
      return demoPosts.find((item) => item.slug === slug) || null;
    }

    return withAccents([post])[0];
  } catch {
    return demoPosts.find((item) => item.slug === slug) || null;
  }
});

export async function getFeaturedPost() {
  const posts = await getAllPosts();
  return posts.find((post) => post.featured) || posts[0] || null;
}

export async function getLatestPosts(limit = 3) {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getAllTags() {
  const posts = await getAllPosts();
  return [...new Set(posts.flatMap((post) => post.tags))].sort();
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllPosts();
  return posts.filter((post) =>
    post.tags.some((item) => slugify(item) === slugify(tag)),
  );
}
