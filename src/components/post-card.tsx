import Link from "next/link";

import { TagChip } from "@/components/tag-chip";
import type { Post } from "@/lib/types";
import { estimateReadingTime, formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <div className="cover-swatch">
        {post.image?.url ? (
          <img 
            src={post.image.url} 
            alt={post.image.alt || post.title}
            className="cover-image"
            loading="lazy"
          />
        ) : (
          <div
            className="cover-gradient"
            style={
              {
                "--accent-from": post.accent.from,
                "--accent-to": post.accent.to,
              } as React.CSSProperties
            }
          />
        )}
      </div>

      <div className="post-card-body">
        <p className="meta-line">
          <span>{post.category}</span>
          <span>{estimateReadingTime(post.body)} min read</span>
        </p>

        <h3>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="muted">{post.excerpt}</p>

        <div className="post-card-footer">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <div className="tag-row">
            {post.tags.slice(0, 2).map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
