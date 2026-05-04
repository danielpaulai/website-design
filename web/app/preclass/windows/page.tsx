import fs from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Class Setup — Windows",
  description: "Step-by-step setup for Windows users before the Aura Build workshop.",
};

export default function WindowsGuide() {
  const docPath = path.join(process.cwd(), "..", "workshop", "WINDOWS-GUIDE.md");
  const markdown = fs.readFileSync(docPath, "utf8");

  return (
    <main className="min-h-screen px-6 py-24 md:px-12 md:py-32">
      <article className="max-w-3xl mx-auto prose-aura">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ src, alt, ...props }) => {
              const resolved =
                typeof src === "string" && src.startsWith("images/")
                  ? `/preclass/${src}`
                  : src;
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={typeof resolved === "string" ? resolved : undefined}
                  alt={alt}
                  loading="lazy"
                  {...props}
                />
              );
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </main>
  );
}
