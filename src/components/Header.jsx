import React from 'react'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

function Header({ query, onQueryChange, theme, onToggleTheme }) {
  return (
    <header className="app-header-wrapper container">
      <div className="app-header">
        <div className="brand">
          <div className="logo">N</div>
          <div>
            <div>Notes</div>
            <small>Personal React App</small>
          </div>
        </div>

        <SearchBar value={query} onChange={onQueryChange} />

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
export default Header
