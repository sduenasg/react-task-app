import React, { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      description: description,
    };
    createTask(newTask);
    setTitle('')
    setDescription('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Input your task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value = {title}
          autoFocus
        />
        <textarea
          placeholder="Input your task's description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value = {description}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
