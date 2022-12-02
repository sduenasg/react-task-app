import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  // runs when the component loads for the first time
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, { ...task, id: tasks.length }]); //append task to the list
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