import { fal } from "@fal-ai/client";

export async function generateRoomDesign(imageUrl: string, style: string, roomType: string) {
  const prompt = `A professional high-quality interior design of a ${roomType} in ${style} style. Highly detailed, realistic, cinematic lighting, 8k resolution, architectural photography, interior design magazine style.`;

  try {
    const result: any = await fal.subscribe("fal-ai/flux/dev/image-to-image", {
      input: {
        image_url: imageUrl,
        prompt: prompt,
        strength: 0.6,
        guidance_scale: 7.5,
        num_inference_steps: 30,
      }
    });

    return {
      imageUrl: result.images[0].url,
      prompt: prompt
    };
  } catch (error) {
    console.error("Fal AI Service Error:", error);
    throw new Error("Failed to generate design with Fal AI");
  }
}
