import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,
    "category": category->title,
    tags,
    mainImage,
    "author": author->{
      name,
      role
    },
    body
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,
    "category": category->title,
    tags,
    mainImage,
    "author": author->{
      name,
      role
    },
    body
  }
`);
