import React, { useState, useEffect } from "react";
import { fetchStudents, addStudent } from "../api";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await fetchStudents();
    setStudents(data);
  };

  const handleAddStudent = async () => {
    if (!name || !age) return;
    const newStudent = await addStudent({ name, age });
    setStudents([...students, newStudent]);
    setName("");
    setAge("");
  };

  return (
    <div>
      <h1>Students</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <button onClick={handleAddStudent}>Add Student</button>

      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {s.name} - {s.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
