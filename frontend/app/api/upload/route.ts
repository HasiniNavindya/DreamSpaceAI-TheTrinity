import { NextResponse } from 'next/server';

/**
 * Mock Upload Route for Hackathon Development
 * This bypasses Vercel Blob to avoid 500 errors when tokens are missing.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || 'room.jpg';

  try {
    console.log("Mock Uploading:", filename);

    // In a real hackathon scenario without Blob storage, 
    // we return a public placeholder image so the AI generation can still function.
    return NextResponse.json({
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      pathname: filename,
      contentType: 'image/jpeg',
    });
  } catch (error: any) {
    console.error("Mock Upload Error:", error);
    return NextResponse.json({ error: "Failed to process mock upload" }, { status: 500 });
  }
}
