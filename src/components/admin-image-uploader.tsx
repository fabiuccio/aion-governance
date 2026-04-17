"use client";

import { useId, useState } from "react";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { slugify } from "@/lib/utils";

interface AdminImageUploaderProps {
  targetInputId?: string;
}

export function AdminImageUploader({
  targetInputId,
}: AdminImageUploaderProps) {
  const inputId = useId();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [error, setError] = useState("");

  async function handleUpload() {
    if (!file) {
      setError("Choose an image first.");
      return;
    }

    const client = createSupabaseBrowserClient();

    if (!client) {
      setError("Supabase is not configured.");
      return;
    }

    setIsUploading(true);
    setError("");

    const extension = file.name.includes(".")
      ? file.name.split(".").pop()?.toLowerCase() ?? "jpg"
      : "jpg";
    const path = `articles/${Date.now()}-${slugify(file.name.replace(/\.[^/.]+$/, ""))}.${extension}`;

    const { error: uploadError } = await client.storage
      .from("article-images")
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      setIsUploading(false);
      setError(uploadError.message);
      return;
    }

    const {
      data: { publicUrl },
    } = client.storage.from("article-images").getPublicUrl(path);

    setUploadedUrl(publicUrl);
    setIsUploading(false);
  }

  function useAsFeaturedImage() {
    if (!uploadedUrl || !targetInputId) return;

    const target = document.getElementById(targetInputId) as HTMLInputElement | null;
    if (!target) return;

    target.value = uploadedUrl;
    target.dispatchEvent(new Event("input", { bubbles: true }));
  }

  async function copyMarkdown() {
    if (!uploadedUrl) return;
    await navigator.clipboard.writeText(`![Alt text](${uploadedUrl})`);
  }

  async function copyUrl() {
    if (!uploadedUrl) return;
    await navigator.clipboard.writeText(uploadedUrl);
  }

  return (
    <div className="rounded-[1.5rem] border border-border bg-shell p-5">
      <p className="text-sm text-ink/75">Upload image</p>
      <p className="mt-2 text-xs leading-6 text-ink/55">
        Upload to the `article-images` Supabase Storage bucket, then use the
        public URL as a featured image or in markdown.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          id={inputId}
          type="file"
          accept="image/*"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          className="block w-full text-sm text-ink/70 file:mr-4 file:rounded-full file:border-0 file:bg-paper file:px-4 file:py-2 file:text-sm file:text-ink"
        />
        <button
          type="button"
          onClick={handleUpload}
          disabled={isUploading}
          className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper disabled:opacity-60"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {error ? (
        <p className="mt-3 text-sm text-red-700">{error}</p>
      ) : null}
      {uploadedUrl ? (
        <div className="mt-4 space-y-3">
          <div className="rounded-2xl border border-border bg-paper px-4 py-3 text-xs text-ink/65">
            {uploadedUrl}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copyUrl}
              className="rounded-full border border-border px-4 py-2 text-sm text-ink"
            >
              Copy URL
            </button>
            <button
              type="button"
              onClick={copyMarkdown}
              className="rounded-full border border-border px-4 py-2 text-sm text-ink"
            >
              Copy markdown
            </button>
            {targetInputId ? (
              <button
                type="button"
                onClick={useAsFeaturedImage}
                className="rounded-full border border-border px-4 py-2 text-sm text-ink"
              >
                Use as featured image
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
