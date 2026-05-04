import fs from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Class Setup — Aura Build Workshop",
  description:
    "Set up your laptop in 25 minutes before the workshop. Mac and Windows guides.",
};

export default function PreClassPage() {
  const docPath = path.join(
    process.cwd(),
    "..",
    "workshop",
    "PRE-CLASS-ACTIVITY.md"
  );
  const markdown = fs.readFileSync(docPath, "utf8");

  return (
    <main className="min-h-screen px-6 py-24 md:px-12 md:py-32">
      <article className="max-w-3xl mx-auto prose-aura">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children, ...props }) => {
              const resolved = (() => {
                if (!href) return undefined;
                if (href.startsWith("http") || href.startsWith("mailto:")) return href;
                if (href === "MAC-GUIDE.md") return "/preclass/mac";
                if (href === "WINDOWS-GUIDE.md") return "/preclass/windows";
                return href;
              })();
              return (
                <a
                  href={resolved}
                  target={resolved?.startsWith("http") ? "_blank" : undefined}
                  rel={resolved?.startsWith("http") ? "noopener noreferrer" : undefined}
                  {...props}
                >
                  {children}
                </a>
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
