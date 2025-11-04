// src/api.js
const API_URL = "http://localhost:5000/api"; // make sure your backend is running

// Students
export const fetchStudents = async () => {
  const res = await fetch(`${API_URL}/students`);
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") === -1) {
    throw new Error("Received non-JSON response from server.");
  }
  return res.json();
};

export const addStudent = async (student) => {
  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") === -1) {
    throw new Error("Received non-JSON response from server.");
  }
  return res.json();
};

// Tasks
export const fetchTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") === -1) {
    throw new Error("Received non-JSON response from server.");
  }
  return res.json();
};

export const addTask = async (task) => {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") === -1) {
    throw new Error("Received non-JSON response from server.");
  }
  return res.json();
};
