import Link from "next/link";

import { slugify } from "@/lib/utils";

export function TagChip({ tag }: { tag: string }) {
  return (
    <Link href={`/tags/${slugify(tag)}`} className="tag-chip">
      {tag}
    </Link>
  );
}
