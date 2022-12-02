import React, {useContext} from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext)
  
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
