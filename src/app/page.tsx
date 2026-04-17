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
          <p className="eyebrow">Essays on life, psychology, meaning, and growth</p>
          <h1>The Turning Point</h1>
          <p className="hero-text">
            A publication for readers interested in the inner life: thoughtful
            essays on identity, relationships, psychology, and the difficult art
            of becoming.
          </p>

          <div className="hero-actions">
            <Link href={`/blog/${featuredPost.slug}`} className="primary-link">
              Read the featured essay
            </Link>
            <Link href="/blog" className="secondary-link">
              Browse the archive
            </Link>
          </div>
        </div>
      </section>

      <section className="shell lead-story">
        <article className="lead-story-card">
          <div className="lead-story-art">
            {featuredPost.image?.url ? (
              <img
                src={featuredPost.image.url}
                alt={featuredPost.image.alt || featuredPost.title}
                className="lead-story-image"
              />
            ) : (
              <div
                className="lead-story-gradient"
                style={
                  {
                    "--accent-from": featuredPost.accent.from,
                    "--accent-to": featuredPost.accent.to,
                  } as React.CSSProperties
                }
              />
            )}
          </div>

          <div className="lead-story-body">
            <div className="lead-story-meta">
              <span>{featuredPost.category}</span>
              <span>{formatDate(featuredPost.publishedAt)}</span>
              <span>{estimateReadingTime(featuredPost.body)} min read</span>
            </div>

            <h2>{featuredPost.title}</h2>
            <p className="lead-story-excerpt">{featuredPost.excerpt}</p>

            <div className="tag-row">
              {featuredPost.tags.map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="text-link">
              Read this essay <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </section>

      <section className="shell resonance-panel">
        <div className="resonance-copy">
          <p className="eyebrow">Why readers return</p>
          <h2 className="section-title">Writing built to be underlined, saved, and returned to.</h2>
        </div>

        <div className="resonance-grid">
          <article className="resonance-card">
            <p className="eyebrow">Self-knowledge</p>
            <h3>Essays that give shape to experiences people often feel before they can name.</h3>
          </article>
          <article className="resonance-card">
            <p className="eyebrow">Psychology</p>
            <h3>Emotionally intelligent writing that stays clear without becoming cold.</h3>
          </article>
          <article className="resonance-card">
            <p className="eyebrow">Meaning</p>
            <h3>A place for readers trying to live more deliberately and think more honestly.</h3>
          </article>
        </div>
      </section>

      <section className="shell feature-panel">
        <div className="feature-copy">
          <p className="eyebrow">Newsletter</p>
          <h2>New essays, sent with restraint.</h2>
          <p className="muted">
            Join for new writing on identity, growth, psychology, and the inner
            architecture of a meaningful life.
          </p>
        </div>

        <div id="newsletter">
          <NewsletterForm />
        </div>
      </section>

      <section className="shell stack-lg">
        <div className="section-head">
          <div>
            <p className="eyebrow">Recent writing</p>
            <h2 className="section-title">Latest essays from the journal</h2>
          </div>
          <Link href="/blog" className="text-link">
            Browse the archive <ArrowRight size={16} />
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
          <h2 className="section-title">
            The questions this publication keeps returning to
          </h2>
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
