/*
 * Server metadata and instructions returned in the MCP initialize response.
 */

import type { Implementation } from "@modelcontextprotocol/sdk/types.js";

const ICON_BASE =
  "https://cloudinary-res.cloudinary.com/image/upload/docsite/brand-assets";

export const serverInfo: Omit<Implementation, "name" | "version"> = {
  title: "Cloudinary Media Generation",
  description:
    "Generate and edit images with AI from text prompts and reference images, saved to Cloudinary.",
  websiteUrl: "https://cloudinary.com/documentation/image_generation_addon",
  icons: [32, 96, 192].map((size) => ({
    src: `${ICON_BASE}/cloudinary_favicon_${size}x${size}.png`,
    mimeType: "image/png",
    sizes: [`${size}x${size}`],
  })),
};

export const instructions =
  `Cloudinary Media Generation: generate images with AI and save them straight to the user's Cloudinary account, ready to deliver, transform and optimize.

- Use it whenever the user wants a new image or a variation of one. generate-image creates from a text prompt; generate-image-from-images uses a prompt plus up to 4 reference images (HTTPS URL or asset_id) for restyling, on-brand variants, character consistency, virtual try-on, or edit/extend. Refer to the references in the prompt as [1], [2], ...
- Model: set model.mode "auto" and Cloudinary picks the best model per request; steer it with preference (balanced, quality, economy, or a _fast variant). Use model.id or model.family only when the user names a model, and never together with auto.
- Storage: results are saved as permanent assets by default (target_type "managed_asset", optional public_id and upload_preset). Use "temporary" to try prompt variations, then regenerate the chosen one as "managed_asset".
- Long generations: set async: true and poll get-generation-task with the returned task_id.
- Generated assets are tagged text-to-image or image-to-image and carry model_id, prompt and seed as contextual metadata, so they can be found later, e.g. with the Asset Management server's search-assets.
- Docs: https://cloudinary.com/documentation/image_generation_addon.md; all Cloudinary docs: https://cloudinary.com/documentation/llms.txt`;
