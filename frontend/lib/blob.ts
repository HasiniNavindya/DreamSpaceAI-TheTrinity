import { put } from '@vercel/blob';

/**
 * Uploads a file to Vercel Blob.
 * @param filename - The name of the file.
 * @param content - The file content (Buffer, Blob, etc.).
 * @returns The URL of the uploaded file.
 */
export async function uploadImage(filename: string, content: Buffer | Blob | string) {
  const { url } = await put(filename, content, {
    access: 'public',
  });
  return url;
}
