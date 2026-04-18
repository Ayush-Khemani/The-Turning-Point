import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import {
  structureTool,
  StructureBuilder,
} from "sanity/structure";
import {
  defaultDocumentNode,
  documentActions,
} from "sanity/structure";

import { schemaTypes } from "@/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const title = process.env.SANITY_STUDIO_PROJECT_TITLE || "The Turning Point";

export default defineConfig({
  name: "default",
  title,
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      defaultDocumentNode: defaultDocumentNode(),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (input) =>
      documentActions(input, {
        "post/publish": {},
      }),
  },
});
