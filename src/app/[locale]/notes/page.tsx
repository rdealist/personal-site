import { Metadata } from "next";
import NotesPageClient from "./notes-page.client";

export const metadata: Metadata = {
  title: "Notes | AI Knowledge Base",
  description:
    "AI learning notes, thoughts, and insights - exploring concepts, techniques, and applications",
};

export default function NotesPage() {
  return <NotesPageClient />;
}
