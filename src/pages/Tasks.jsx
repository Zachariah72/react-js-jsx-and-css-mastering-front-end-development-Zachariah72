import React, { useState, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTheme } from "../context/ThemeContext";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const { theme, toggleTheme } = useTheme();

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed);
      case "completed":
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  }, [filter, tasks]);

  return (
    <div
      className={`min-h-screen px-6 py-10 transition duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Task Manager</h2>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="flex mb-5">
          <input
            className="border rounded-l px-3 py-2 w-full outline-none"
            placeholder="Enter a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <div className="flex gap-2 mb-5 justify-center">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <ul>
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 mb-2 rounded shadow-sm"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-5">
            No tasks yet — start by adding one!
          </p>
        )}
      </div>
    </div>
  );
}
