import React, { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
        title: title,
        description: description
    }
    createTask(newTask)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Input your task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          placeholder="Input your task's description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
