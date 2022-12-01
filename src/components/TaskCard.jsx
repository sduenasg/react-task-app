import React from "react";

function TaskCard({ task, deleteTask }) {
  function showAlert() {
    // alert("Deleting "+ task.id);
  }

  return (
    <div>
      <h1>
        {task.id} {task.title}
      </h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
