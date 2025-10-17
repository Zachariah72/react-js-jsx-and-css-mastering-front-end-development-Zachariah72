import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), title: newTask }]);
    setNewTask('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded"
          placeholder="Enter new task"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 mb-2 bg-gray-50 dark:bg-gray-700 rounded"
          >
            {task.title}
            <button
              onClick={() => removeTask(task.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
