import React from "react";
import { showFormattedDate } from "../utils";

function NoteCard({ note, onToggleArchive, onDelete }) {
  const { id, title, body, createdAt, archived } = note;
  return (
    <article className="card">
      <h3 className="note-title">{title}</h3>
      <div className="note-meta">
        {showFormattedDate(createdAt)}
        {archived ? " · Arsip" : ""}
      </div>
      <div style={{ whiteSpace: "pre-wrap" }}>{body}</div>
      <div className="btns">
        <button className="btn ghost" onClick={() => onToggleArchive(id)} title={archived ? "Pindahkan dari Arsip" : "Arsipkan Catatan"}>
          {/* archive icon */}
          <svg
            aria-hidden="true"
            className="icon"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h18"></path>
            <path d="M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></path>
            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"></path>
            <path d="M10 12h4"></path>
          </svg>
          <span>{archived ? "Pindahkan" : "Arsipkan"}</span>
        </button>
        <button className="btn danger" onClick={() => onDelete(id)} title="Hapus Catatan">
          {/* trash icon */}
          <svg
            aria-hidden="true"
            className="icon"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18"></path>
            <path d="M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"></path>
            <path d="M19 6l-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
          </svg>
          <span>Hapus</span>
        </button>
      </div>
    </article>
  );
}
export default NoteCard;
