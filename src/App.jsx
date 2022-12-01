import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  // runs when the component loads for the first time
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, { ...task, id: tasks.length}]); //append task to the list
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
