import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const workFolder = path.join(
      process.cwd(),
      "public",
      "images",
      "work"
    );

    const allowedExtensions = new Set([
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".JPG",
      ".JPEG",
      ".PNG",
      ".WEBP",
    ]);

    const images = fs
      .readdirSync(workFolder)
      .filter((file) =>
        allowedExtensions.has(path.extname(file))
      )
      .map((file) => `/images/work/${encodeURIComponent(file)}`);

    return Response.json(images);
  } catch (err) {
    console.error(err);
    return Response.json([], { status: 500 });
  }
}
