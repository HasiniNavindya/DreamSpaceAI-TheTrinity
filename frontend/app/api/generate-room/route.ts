import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { generateRoomDesign } from "@/services/falService";

export async function POST(req: NextRequest) {
  try {
    const { image_url, style, room_type } = await req.json();

    if (!image_url || !style || !room_type) {
      return NextResponse.json(
        { error: "Missing required fields: image_url, style, room_type" },
        { status: 400 }
      );
    }

    // Call the Fal AI Service
    const { imageUrl: generatedImage, prompt } = await generateRoomDesign(image_url, style, room_type);

    // Save to Supabase
    let design;
    try {
      const { data: inserted, error } = await supabase
        .from('room_designs')
        .insert([
          {
            original_image: image_url,
            generated_image: generatedImage,
            style: style,
            room_type: room_type,
            prompt: prompt,
          }
        ])
        .select()
        .single();

      if (error) throw error;
      design = inserted;
    } catch (dbSaveError) {
      console.error("Failed to save to Supabase history:", dbSaveError);
      // Create a fake object for the response so frontend doesn't crash
      design = {
        original_image: image_url,
        generated_image: generatedImage,
        style: style,
        room_type: room_type,
        created_at: new Date().toISOString()
      };
    }

    return NextResponse.json({
      success: true,
      data: {
        id: design.id,
        originalImage: design.original_image,
        generatedImage: design.generated_image,
        style: design.style,
        roomType: design.room_type,
        createdAt: design.created_at
      },
    });

  } catch (error: any) {
    console.error("Generation Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate room design" },
      { status: 500 }
    );
  }
}
