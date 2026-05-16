"use client";

import Image from "next/image";
import { saveRoomPreview } from "@/lib/transformationStorage";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

const MAX_FILE_SIZE_MB = 10;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export default function ImageUploadForm() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const clearPreview = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setFile(null);
  }, [previewUrl]);

  const handleFile = useCallback(
    (nextFile: File | undefined) => {
      setError(null);
      if (!nextFile) return;

      if (!ACCEPTED_TYPES.includes(nextFile.type)) {
        setError("Please upload a JPG, PNG, or WebP image.");
        return;
      }

      if (nextFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(`Image must be ${MAX_FILE_SIZE_MB}MB or smaller.`);
        return;
      }

      clearPreview();
      const url = URL.createObjectURL(nextFile);
      setFile(nextFile);
      setPreviewUrl(url);
    },
    [clearPreview],
  );

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    handleFile(event.target.files?.[0]);
    event.target.value = "";
  }

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    handleFile(event.dataTransfer.files?.[0]);
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!file || !previewUrl) {
      setError("Upload a room photo to continue.");
      return;
    }
    saveRoomPreview(previewUrl);
    router.push("/dashboard");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-2xl rounded-[2rem] border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-[0_12px_32px_rgba(43,43,43,0.04)] md:p-10"
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") inputRef.current?.click();
        }}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        className={`group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-10 transition-colors ${
          isDragging
            ? "border-primary bg-primary-fixed/40"
            : "border-outline-variant/50 bg-surface-container-low hover:border-primary/50 hover:bg-primary-fixed/20"
        }`}
      >
        {previewUrl ? (
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-xl border-2 border-white shadow-sm">
            <Image
              src={previewUrl}
              alt="Uploaded room preview"
              fill
              className="object-cover"
              unoptimized
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-container text-primary transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[40px]">cloud_upload</span>
          </div>
        )}

        <div className="text-center">
          <p className="font-medium text-on-surface">
            {previewUrl ? "Click or drop to replace photo" : "Drag and drop your room photo"}
          </p>
          <p className="mt-1 text-sm text-on-surface-variant">
            Supports JPG, PNG, WebP up to {MAX_FILE_SIZE_MB}MB
          </p>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            inputRef.current?.click();
          }}
          className="rounded-full bg-primary px-8 py-3 text-sm font-medium tracking-wide text-on-primary transition-transform hover:scale-105 active:scale-95"
        >
          {previewUrl ? "Change Image" : "Choose Image"}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_TYPES.join(",")}
          className="hidden"
          onChange={onInputChange}
        />
      </div>

      {error ? (
        <p className="mt-4 text-center text-sm text-error" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={!file}
        className="mt-8 w-full rounded-full bg-primary-container py-4 text-base font-medium text-on-primary-container transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Start Transformation
      </button>
    </form>
  );
}
