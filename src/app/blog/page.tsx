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
        <h1>Writing that rewards slow reading.</h1>
        <p className="muted wide-copy">
          Search through essays on inner growth, psychology, relationships,
          focus, and meaning. This archive is designed like a publication, not
          a content dump.
        </p>
      </section>

      <SearchablePostList posts={posts} />
    </div>
  );
}
