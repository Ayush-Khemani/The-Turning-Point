import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  try {
    // Revalidate the home page and blog pages
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/tags", "layout");

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
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/tags", "layout");

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
