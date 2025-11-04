import express from "express";
import Student from "../models/Student.js";
const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  const students = await Student.find().populate("tasks");
  res.json(students);
});

// Add new student
router.post("/", async (req, res) => {
  const newStudent = new Student(req.body);
  const savedStudent = await newStudent.save();
  res.json(savedStudent);
});

export default router;
