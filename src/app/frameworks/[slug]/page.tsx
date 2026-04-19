import { redirect, notFound } from "next/navigation";

interface FrameworkPageProps {
  params: {
    slug: string;
  };
}

const REDIRECTS: Record<string, string> = {
  "debt-quadrant": "/debt-quadrant",
  "executive-action-framework": "/sprint",
  "governed-ai-loop": "/glossary",
  "aios": "/glossary",
};

export default function FrameworkPage({ params }: FrameworkPageProps) {
  const destination = REDIRECTS[params.slug];
  if (destination) {
    redirect(destination);
  }
  notFound();
}
