// Auto-generated at build time
export const toolNames: Array<{ name: string; description: string }>= [
  {
    "name": "generation-generate-image",
    "description": "Generate Image\n\nGenerate an image from a text prompt using AI models.\n\nThe API resolves which model to invoke using a layered override system:\n1. If `explicit_model` is provided, use that exact model.\n2. If `model_family` + `quality_tier` are provided, look up the model in the Model Matrix.\n3. If only `model_family` is provided, default to `quality_tier: \"standard\"`.\n4. If no model params are provided, use the global default (nano_banana / standard).\n"
  }
];
