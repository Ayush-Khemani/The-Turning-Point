import type { PortableTextBlock } from "@portabletext/types";

export type SanityImageSource = {
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  alt?: string;
};

export type PostImage = {
  url: string;
  alt: string;
};

export type Author = {
  name: string;
  role?: string;
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  category: string;
  tags: string[];
  author: Author;
  body: PortableTextBlock[];
  mainImage?: SanityImageSource;
  image?: PostImage;
  accent: {
    from: string;
    to: string;
  };
};
