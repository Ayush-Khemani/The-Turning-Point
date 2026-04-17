import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { NewsletterForm } from "@/components/newsletter-form";
import { PostCard } from "@/components/post-card";
import { TagChip } from "@/components/tag-chip";
import { getAllTags, getFeaturedPost, getLatestPosts } from "@/lib/content";
import { estimateReadingTime, formatDate } from "@/lib/utils";

export default async function HomePage() {
  const [featuredPost, latestPosts, tags] = await Promise.all([
    getFeaturedPost(),
    getLatestPosts(3),
    getAllTags(),
  ]);

  if (!featuredPost) {
    return null;
  }

  return (
    <div className="stack-hero">
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Reflective publication</p>
          <h1>
            Thoughtful essays on growth, attention, relationships, and the
            deeper texture of life.
          </h1>
          <p className="hero-text">
            Built for long-form reading, calm attention, and meaningful ideas.
            The editorial tone is intimate, psychologically aware, and designed
            to make the writing itself feel valuable.
          </p>

          <div className="hero-actions">
            <Link href="/blog" className="primary-link">
              Explore the journal
            </Link>
            <Link href="/studio" className="secondary-link">
              Open the CMS
            </Link>
          </div>
        </div>

        <div
          className="hero-art"
          style={
            {
              "--accent-from": featuredPost.accent.from,
              "--accent-to": featuredPost.accent.to,
            } as React.CSSProperties
          }
        >
          <div className="hero-art-card">
            <p className="eyebrow">{featuredPost.category}</p>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="meta-line">
              <span>{formatDate(featuredPost.publishedAt)}</span>
              <span>{estimateReadingTime(featuredPost.body)} min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shell feature-panel">
        <div className="feature-copy">
          <p className="eyebrow">Featured essay</p>
          <h2>{featuredPost.title}</h2>
          <p className="muted">{featuredPost.excerpt}</p>
          <div className="tag-row">
            {featuredPost.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>
          <Link href={`/blog/${featuredPost.slug}`} className="text-link">
            Read the featured piece <ArrowRight size={16} />
          </Link>
        </div>

        <NewsletterForm />
      </section>

      <section className="shell stack-lg">
        <div className="section-head">
          <div>
            <p className="eyebrow">Recent writing</p>
            <h2 className="section-title">Latest essays</h2>
          </div>
          <Link href="/blog" className="text-link">
            View all articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="post-grid">
          {latestPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>

      <section className="shell themes-panel">
        <div>
          <p className="eyebrow">Themes</p>
          <h2 className="section-title">Topics your readers can return to</h2>
        </div>

        <div className="tag-cloud">
          {tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      </section>
    </div>
  );
}
