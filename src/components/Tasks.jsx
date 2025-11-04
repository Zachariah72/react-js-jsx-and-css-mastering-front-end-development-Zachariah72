import React, { useEffect, useState } from "react";
import { fetchTasks, addTask, updateTask } from "../api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (!title) return;
    const newTask = await addTask({ title, status: "active" });
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleStatus = async (task) => {
    const updatedTask = await updateTask(task._id, {
      status: task.status === "active" ? "completed" : "active",
    });
    setTasks(tasks.map((t) => (t._id === task._id ? updatedTask : t)));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.status}
            <button onClick={() => toggleStatus(task)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
