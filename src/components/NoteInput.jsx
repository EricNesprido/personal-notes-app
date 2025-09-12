import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(e) {
    const v = e.target.value;
    if (v.length <= 50) {
      this.setState({ title: v });
    }
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    if (!title.trim() || !body.trim()) return;
    this.props.onAdd({ title: title.trim(), body: body.trim() });
    this.setState({ title: "", body: "" });
  }

  render() {
    const remaining = 50 - this.state.title.length;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="small" style={{ textAlign: "right" }}>
          Sisa karakter judul: <span className="mono">{remaining}</span>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Judul catatan (maks 50 karakter)"
          value={this.state.title}
          onChange={this.onTitleChange}
          required
        />
        <textarea
          placeholder="Tulis catatan kamu di sini…"
          value={this.state.body}
          onChange={this.onBodyChange}
          required
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn secondary" type="submit" title="Tambah Catatan">
            {/* plus icon */}
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
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            Tambah Catatan
          </button>
        </div>
      </form>
    );
  }
}
export default NoteInput;
