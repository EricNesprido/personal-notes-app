import React from "react";
import { getInitialData } from "./utils";
import Header from "./components/Header";
import Section from "./components/Section";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: "",
      theme: props.initialTheme || "light",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleArchive = this.handleToggleArchive.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleAdd({ title, body }) {
    this.setState((prev) => ({
      notes: [
        ...prev.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  handleDelete(id) {
    this.setState((prev) => ({
      notes: prev.notes.filter((n) => n.id !== id),
    }));
  }

  handleToggleArchive(id) {
    this.setState((prev) => ({
      notes: prev.notes.map((n) =>
        n.id === id ? { ...n, archived: !n.archived } : n
      ),
    }));
  }

  handleQueryChange(v) {
    this.setState({ query: v });
  }

  handleToggleTheme() {
    const next = this.state.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    this.setState({ theme: next });
  }

  render() {
    const { notes, query, theme } = this.state;
    const normalized = query.toLowerCase();
    const visible = normalized.trim()
      ? notes.filter((n) => n.title.toLowerCase().includes(normalized))
      : notes;

    const active = visible.filter((n) => !n.archived);
    const archived = visible.filter((n) => n.archived);

    return (
      <>
        <Header
          query={query}
          onQueryChange={this.handleQueryChange}
          theme={theme}
          onToggleTheme={this.handleToggleTheme}
        />

        <Section title="Tambah Catatan">
          <NoteInput onAdd={this.handleAdd} />
        </Section>

        <Section title="Catatan Aktif">
          <NoteList
            notes={active}
            onToggleArchive={this.handleToggleArchive}
            onDelete={this.handleDelete}
          />
        </Section>

        <Section title="Arsip">
          <NoteList
            notes={archived}
            onToggleArchive={this.handleToggleArchive}
            onDelete={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}

export default App;
