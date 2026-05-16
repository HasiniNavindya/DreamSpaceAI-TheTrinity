import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    console.log("Fetching recommendations from Supabase...");
    
    const { searchParams } = new URL(req.url);
    const style = searchParams.get('style') || "Modern Luxury";
    console.log("Style:", style);

    // Try to find recommendations for the style in Supabase
    let data;
    try {
      const { data: rec, error } = await supabase
        .from('recommendations')
        .select('*')
        .ilike('style', `%${style}%`)
        .single();
      
      if (!error && rec) {
        data = rec;
      }
    } catch (dbError) {
      console.warn("Supabase query failed (using mock fallback):", dbError);
    }

    // If not found, use default ones
    if (!data) {
      const defaultData: any = {
        "Modern Luxury": {
          furniture: ["Minimalist sofa", "Glass coffee table", "Arc floor lamp"],
          lighting: ["Dimmable recessed lights", "LED strip accents"],
          colors: ["#FFFFFF", "#F5F5F5", "#333333"],
          tips: ["Keep surfaces clear", "Use a single bold accent piece", "Incorporate metallic accents for a luxury feel", "Maximize natural light with sheer curtains"]
        },
        "Scandinavian Minimalist": {
          furniture: ["Light wood furniture", "Neutral-toned textiles", "Functional storage"],
          lighting: ["Soft ambient lighting", "Pendant lamps"],
          colors: ["#F0F0F0", "#D3D3D3", "#808080"],
          tips: ["Focus on 'hygge' or coziness", "Use natural materials", "Declutter your space", "Add indoor plants for a fresh look"]
        }
      };
      
      const foundData = defaultData[style] || defaultData["Modern Luxury"];
      data = { style, ...foundData };
    }

    return NextResponse.json({
      success: true,
      data: {
        style: data.style,
        furniture: data.furniture,
        lighting: data.lighting,
        colors: data.colors,
        tips: data.tips
      },
    });

  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message || "Internal Server Error",
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
