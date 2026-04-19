"use client";

import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { marked } from "marked";
import TurndownService from "turndown";

const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced" });

function markdownToHtml(md: string): string {
  if (!md) return "";
  return marked.parse(md, { async: false }) as string;
}

function htmlToMarkdown(html: string): string {
  if (!html || html === "<p></p>") return "";
  return td.turndown(html);
}

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}

function ToolbarButton({ onClick, active, title, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm transition-colors ${
        active
          ? "bg-ink text-paper"
          : "text-ink/60 hover:bg-shell hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="mx-1 h-5 w-px bg-border" />;
}

interface AdminWysiwygEditorProps {
  initialMarkdown?: string;
  onChange?: (markdown: string) => void;
}

export function AdminWysiwygEditor({ initialMarkdown = "", onChange }: AdminWysiwygEditorProps) {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const linkInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: "noopener noreferrer" },
      }),
      Placeholder.configure({ placeholder: "Start writing…" }),
    ],
    content: markdownToHtml(initialMarkdown),
    editorProps: {
      attributes: {
        class: "prose prose-neutral max-w-none min-h-[420px] px-6 py-5 outline-none focus:outline-none",
      },
    },
    onUpdate({ editor }) {
      onChange?.(htmlToMarkdown(editor.getHTML()));
    },
  });

  useEffect(() => {
    if (showLinkInput) linkInputRef.current?.focus();
  }, [showLinkInput]);

  if (!editor) return null;

  function applyLink() {
    if (!linkUrl) {
      editor?.chain().focus().unsetLink().run();
    } else {
      editor?.chain().focus().setLink({ href: linkUrl }).run();
    }
    setShowLinkInput(false);
    setLinkUrl("");
  }

  function openLinkInput() {
    const existing = editor?.getAttributes("link").href ?? "";
    setLinkUrl(existing);
    setShowLinkInput(true);
  }

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-border bg-paper">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border bg-shell px-3 py-2">
        <ToolbarButton title="Bold (⌘B)" onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}>
          <strong>B</strong>
        </ToolbarButton>
        <ToolbarButton title="Italic (⌘I)" onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}>
          <em>I</em>
        </ToolbarButton>
        <ToolbarButton title="Strikethrough" onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")}>
          <span className="line-through">S</span>
        </ToolbarButton>
        <ToolbarButton title="Inline code" onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive("code")}>
          <span className="font-mono text-xs">`_`</span>
        </ToolbarButton>

        <Divider />

        <ToolbarButton title="Heading 2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })}>
          <span className="font-serif font-bold text-xs">H2</span>
        </ToolbarButton>
        <ToolbarButton title="Heading 3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })}>
          <span className="font-serif font-bold text-xs">H3</span>
        </ToolbarButton>

        <Divider />

        <ToolbarButton title="Bullet list" onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="2" cy="4" r="1.5" fill="currentColor"/><rect x="5" y="3" width="8" height="2" rx="1" fill="currentColor"/><circle cx="2" cy="8" r="1.5" fill="currentColor"/><rect x="5" y="7" width="8" height="2" rx="1" fill="currentColor"/><circle cx="2" cy="12" r="1.5" fill="currentColor"/><rect x="5" y="11" width="8" height="2" rx="1" fill="currentColor"/></svg>
        </ToolbarButton>
        <ToolbarButton title="Ordered list" onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><text x="0" y="5" fontSize="5" fill="currentColor" fontFamily="sans-serif">1.</text><rect x="5" y="3" width="8" height="2" rx="1" fill="currentColor"/><text x="0" y="9" fontSize="5" fill="currentColor" fontFamily="sans-serif">2.</text><rect x="5" y="7" width="8" height="2" rx="1" fill="currentColor"/><text x="0" y="13" fontSize="5" fill="currentColor" fontFamily="sans-serif">3.</text><rect x="5" y="11" width="8" height="2" rx="1" fill="currentColor"/></svg>
        </ToolbarButton>

        <Divider />

        <ToolbarButton title="Blockquote" onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="0" y="2" width="2" height="10" rx="1" fill="currentColor"/><rect x="4" y="4" width="9" height="2" rx="1" fill="currentColor" opacity="0.7"/><rect x="4" y="8" width="7" height="2" rx="1" fill="currentColor" opacity="0.7"/></svg>
        </ToolbarButton>
        <ToolbarButton title="Code block" onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive("codeBlock")}>
          <span className="font-mono text-xs">{"</>"}</span>
        </ToolbarButton>
        <ToolbarButton title="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="0" y="6" width="14" height="2" rx="1" fill="currentColor"/></svg>
        </ToolbarButton>

        <Divider />

        <ToolbarButton title="Link" onClick={openLinkInput} active={editor.isActive("link")}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 8.5a3 3 0 004.243 0l1.5-1.5a3 3 0 00-4.243-4.243L6.25 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M8.5 5.5a3 3 0 00-4.243 0L2.757 7a3 3 0 004.243 4.243L7.75 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
        </ToolbarButton>
        {editor.isActive("link") && (
          <ToolbarButton title="Remove link" onClick={() => editor.chain().focus().unsetLink().run()}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 8.5a3 3 0 004.243 0l1.5-1.5a3 3 0 00-4.243-4.243L6.25 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 2"/><path d="M8.5 5.5a3 3 0 00-4.243 0L2.757 7a3 3 0 004.243 4.243L7.75 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 2"/><line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </ToolbarButton>
        )}

        <div className="ml-auto flex items-center gap-1">
          <ToolbarButton title="Undo (⌘Z)" onClick={() => editor.chain().focus().undo().run()}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 5h5a4 4 0 010 8H4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 5L5 2M2 5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </ToolbarButton>
          <ToolbarButton title="Redo (⌘⇧Z)" onClick={() => editor.chain().focus().redo().run()}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 5H7a4 4 0 000 8h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L9 2M12 5l-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </ToolbarButton>
        </div>
      </div>

      {/* Link input bar */}
      {showLinkInput && (
        <div className="flex items-center gap-2 border-b border-border bg-shell/50 px-3 py-2">
          <input
            ref={linkInputRef}
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { e.preventDefault(); applyLink(); }
              if (e.key === "Escape") { setShowLinkInput(false); setLinkUrl(""); }
            }}
            placeholder="https://..."
            className="h-8 flex-1 rounded-lg border border-border bg-paper px-3 text-sm outline-none focus:border-accent"
          />
          <button type="button" onClick={applyLink} className="h-8 rounded-lg bg-ink px-3 text-xs text-paper">
            Apply
          </button>
          <button type="button" onClick={() => { setShowLinkInput(false); setLinkUrl(""); }} className="h-8 rounded-lg border border-border px-3 text-xs text-ink/60">
            Cancel
          </button>
        </div>
      )}

      {/* Editor area */}
      <EditorContent editor={editor} />
    </div>
  );
}
