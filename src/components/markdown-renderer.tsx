import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

function flattenText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const props = node.props as { children?: React.ReactNode };
    return flattenText(props.children);
  }
  return "";
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("markdown-body", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-14 font-serif text-3xl text-ink">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-10 font-serif text-2xl text-ink">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mt-5 text-lg leading-8 text-ink/78">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mt-5 space-y-3 pl-5 text-lg leading-8 text-ink/78 marker:text-accent">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-lg leading-8 text-ink/78 marker:text-accent">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => {
            const noteMatch = flattenText(children).includes("[!NOTE]");

            return (
              <blockquote
                className={cn(
                  "my-8 rounded-[1.5rem] border px-6 py-5 text-ink/75",
                  noteMatch
                    ? "border-accent/25 bg-accent/5"
                    : "border-border bg-shell",
                )}
              >
                {children}
              </blockquote>
            );
          },
          code: ({ className, children }) => {
            const language = className?.replace("language-", "");

            if (language === "diagram") {
              const lines = String(children)
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean);

              return (
                <div className="my-8 rounded-[1.75rem] border border-border bg-paper p-6">
                  <div className="space-y-3">
                    {lines.map((line) => (
                      <div
                        key={line}
                        className="rounded-full border border-border px-4 py-3 text-sm text-ink/70"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <code className="rounded bg-shell px-1.5 py-1 text-[0.95em] text-ink">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <div>{children}</div>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
