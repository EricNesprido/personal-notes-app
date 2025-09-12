import React from "react";

function Section({ title, children }) {
  return (
    <section className="section container">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export default Section;
