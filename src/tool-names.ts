// Auto-generated at build time
export const toolNames: Array<{ name: string; description: string }>= [
  {
    "name": "generation-generate-image",
    "description": "Generate an image\n\nGenerate an image from a text prompt using AI models.\n\nThe model is selected via the optional `model` object:\n1. If `model.id` is provided, use that exact model.\n2. Else if `model.family` (+ optional `model.tier`) is provided, resolve via the model registry; a missing tier defaults to `standard`.\n3. If `model` is omitted, use the global default (nano-banana / standard).\n"
  },
  {
    "name": "tasks-get-generation-task-status",
    "description": "Get a generation task\n\nGet the status of a generation task."
  }
];
