import React from "react";

function Task({ text, category, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask(text); // Pass the task text to identify which task to delete
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
