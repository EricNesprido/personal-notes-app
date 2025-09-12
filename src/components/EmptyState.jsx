import React from "react";
function EmptyState({ message = "Kosong" }) {
  return <div className="empty">{message}</div>;
}
export default EmptyState;
