import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";

function App() {
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
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
