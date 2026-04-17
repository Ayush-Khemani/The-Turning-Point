import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { ReactNode } from "react";
import type { PortableTextBlock } from "@portabletext/types";

import { urlFor } from "@/sanity/lib/image";

const components = {
  block: {
    h2: ({ children }: { children?: ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children?: ReactNode }) => <h3>{children}</h3>,
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote>{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => <strong>{children}</strong>,
    em: ({ children }: { children?: ReactNode }) => <em>{children}</em>,
  },
  types: {
    image: ({ value }: { value: { alt?: string } }) => {
      const imageUrl = urlFor(value).width(1200).height(700).fit("crop").url();

      return (
        <figure className="article-figure">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1200}
            height={700}
            className="article-image"
          />
        </figure>
      );
    },
  },
};

export function RichText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
