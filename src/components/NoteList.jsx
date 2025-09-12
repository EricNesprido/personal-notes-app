import React from "react";
import NoteCard from "./NoteCard";
import EmptyState from "./EmptyState";

function NoteList({ notes, onToggleArchive, onDelete }) {
  if (!notes.length) return <EmptyState message="Tidak ada catatan" />;
  return (
    <div className="grid">
      {notes.map((n) => (
        <NoteCard
          key={n.id}
          note={n}
          onToggleArchive={onToggleArchive}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default NoteList;
