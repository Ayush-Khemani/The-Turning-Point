import type { PortableTextBlock } from "@portabletext/types";

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function estimateReadingTime(blocks: PortableTextBlock[]) {
  const text = portableTextToPlainText(blocks);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function portableTextToPlainText(blocks: PortableTextBlock[]) {
  return blocks
    .map((block) => {
      if (!("children" in block) || !Array.isArray(block.children)) {
        return "";
      }

      return block.children
        .map((child) => ("text" in child ? child.text : ""))
        .join("");
    })
    .join(" ");
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
