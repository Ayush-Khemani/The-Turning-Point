"use client";

import { useDeferredValue, useState } from "react";
import { Search } from "lucide-react";

import { PostCard } from "@/components/post-card";
import type { Post } from "@/lib/types";

export function SearchablePostList({
  posts,
  heading,
}: {
  posts: Post[];
  heading?: string;
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredPosts = posts.filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      post.category,
      post.author.name,
      ...post.tags,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(deferredQuery.toLowerCase().trim());
  });

  return (
    <section className="stack-lg">
      {heading ? <h2 className="section-title">{heading}</h2> : null}

      <div className="search-panel">
        <label className="search-box">
          <Search size={18} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search essays, themes, or categories"
          />
        </label>
        <p className="muted small-copy">{filteredPosts.length} articles</p>
      </div>

      <div className="post-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
