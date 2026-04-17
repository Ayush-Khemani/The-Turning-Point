import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ReadingProgress } from "@/components/reading-progress";
import { RichText } from "@/components/rich-text";
import { TagChip } from "@/components/tag-chip";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { estimateReadingTime, formatDate } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const imageUrl = post.image?.url || "https://theturningpoint.com/og-image.jpg";

  return {
    title: `${post.title} | The Turning Point`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ReadingProgress />

      <article className="article-shell shell">
        <header className="article-header">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>

          <div className="article-meta">
            <span>{post.author.name}</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>{estimateReadingTime(post.body)} min read</span>
          </div>

          <div className="tag-row">
            {post.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>
        </header>

        {post.mainImage?.asset ? (
          <Image
            src={urlFor(post.mainImage).width(1400).height(840).fit("crop").url()}
            alt={post.mainImage.alt || post.title}
            width={1400}
            height={840}
            className="article-image"
          />
        ) : post.image?.url ? (
          <img
            src={post.image.url}
            alt={post.image.alt || post.title}
            className="article-image article-image-fallback"
          />
        ) : (
          <div
            className="article-cover"
            style={
              {
                "--accent-from": post.accent.from,
                "--accent-to": post.accent.to,
              } as React.CSSProperties
            }
          />
        )}

        <div className="article-body" data-article-body>
          <RichText value={post.body} />
        </div>
      </article>
    </>
  );
}
