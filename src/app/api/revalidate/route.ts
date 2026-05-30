import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

import { hasSanityConfig } from "@/sanity/env";
import { client } from "@/sanity/lib/client";

const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]{
  "slug": slug.current
}`;

async function revalidateContent() {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/tags", "layout");

  if (!hasSanityConfig) {
    return;
  }

  const posts = await client.fetch<Array<{ slug: string }>>(POST_SLUGS_QUERY);

  for (const post of posts) {
    revalidatePath(`/blog/${post.slug}`);
  }
}

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  try {
    await revalidateContent();

    return Response.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return Response.json(
      {
        revalidated: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  try {
    await revalidateContent();

    return Response.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return Response.json(
      {
        revalidated: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
