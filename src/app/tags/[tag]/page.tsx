import { SearchablePostList } from "@/components/searchable-post-list";
import { getAllTags, getPostsByTag } from "@/lib/content";
import { slugify } from "@/lib/utils";

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({ tag: slugify(tag) }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = await getPostsByTag(tag);

  return (
    <div className="shell page-stack">
      <section className="page-intro">
        <p className="eyebrow">Theme archive</p>
        <h1>Essays filed under “{tag.replace(/-/g, " ")}”</h1>
      </section>

      <SearchablePostList posts={posts} />
    </div>
  );
}
