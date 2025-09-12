import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <label className="search" title="Cari catatan berdasarkan judul">
      <svg
        className="icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        aria-label="Cari catatan"
        type="search"
        placeholder="Cari catatan berdasarkan judul…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
export default SearchBar;
