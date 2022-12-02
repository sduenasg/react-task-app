import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);


  // runs when the component loads for the first time
  useEffect(() => {
    setTasks(data);
    setNextId(data.length)
  }, []);

  function createTask(task) {

    setTasks([...tasks, { ...task, id: nextId }]); //append task to the list
    setNextId(nextId+1)
  }

  
  function deleteTask(taskId) {
    setTasks(
      tasks.filter(task => task.id !== taskId)
    );
  }

  return (
    <TaskContext.Provider value = {{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  );
}