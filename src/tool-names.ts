// Auto-generated at build time
export const toolNames: Array<{ name: string; description: string }>= [
  {
    "name": "generate-image",
    "description": "Generate an image\n\nGenerate an image from a text prompt using AI models.\n\nThe model is selected via the optional `model` object:\n1. If `model.id` is provided, use that exact model.\n2. Else if `model.family` (+ optional `model.tier`) is provided, resolve via the model registry; a missing tier defaults to `standard`.\n3. If `model` is omitted, use the global default (nano-banana / premium, i.e. `nano-banana-2`).\n"
  },
  {
    "name": "generate-image-from-images",
    "description": "Generate an image from reference images\n\nGenerate an image guided by one or more **reference images** — restyle,\non-brand variants, character consistency, virtual try-on, edit/extend —\nsteered by `prompt`.\n\nOnly edit-capable models are selectable here. The model is selected via\nthe optional `model` object, exactly like `text_to_image`, but IDs are\nrestricted to edit models:\n1. If `model.id` is provided, use that exact edit model.\n2. Else if `model.family` (+ optional `model.tier`) is provided, resolve\n   to that family's edit model (e.g. `nano-banana` / `premium` →\n   `nano-banana-2-edit`).\n3. If `model` is omitted, use the default edit model (`nano-banana-2-edit`).\n\nEach reference image is either a stored managed asset (by `asset_id`,\nread-permission checked) or an external HTTPS `url`.\n"
  },
  {
    "name": "get-generation-task",
    "description": "Get a generation task\n\nGet the status of a generation task."
  }
];
