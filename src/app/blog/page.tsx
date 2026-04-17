import { SearchablePostList } from "@/components/searchable-post-list";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Journal | The Turning Point",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="shell page-stack">
      <section className="page-intro">
        <p className="eyebrow">Journal</p>
        <h1>Essays meant to stay with you after the tab is closed.</h1>
        <p className="muted wide-copy">
          Explore essays on identity, attention, relationships, growth, and the
          difficult art of living well. The archive is organized for thoughtful
          reading, not endless scrolling.
        </p>
      </section>

      <SearchablePostList posts={posts} />
    </div>
  );
}
