import { fal } from "@fal-ai/client";

/**
 * Configure Fal AI client.
 * Note: The FAL_KEY environment variable is automatically used by the client
 * if it's defined in .env.local.
 */

export const falClient = fal;

export const AI_MODELS = {
  IMAGE_TO_IMAGE: "fal-ai/flux/dev/image-to-image",
  ROOM_TRANSFORM: "fal-ai/fuxi-ai/interior-design", // Example model, might need adjustment based on specific Fal API
};
