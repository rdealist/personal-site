import { getAllNotes, getAllTags } from "@/lib/notes";
import NotesPageClient from "./notes-page.client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | AI Knowledge Base",
  description:
    "AI learning notes, thoughts, and insights - exploring concepts, techniques, and applications",
};

export default function NotesPage() {
  const allNotes = getAllNotes();
  const allTags = getAllTags();

  return <NotesPageClient initialNotes={allNotes} initialTags={allTags} />;
}
