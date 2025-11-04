<img width="510" height="620" alt="image" src="https://github.com/user-attachments/assets/4555cc93-2d8f-4938-ac34-20b53ca67439" />

<img width="510" height="620" alt="image" src="https://github.com/user-attachments/assets/920401ab-6d97-4d9f-b237-fd7742ac460c" />

<img width="510" height="620" alt="image" src="https://github.com/user-attachments/assets/08b78995-cdf9-4e9c-923e-43d788306da1" />

<img width="510" height="620" alt="image" src="https://github.com/user-attachments/assets/aac6993b-d16e-4982-9b99-d0c37371ac37" />

<img width="510" height="620" alt="image" src="https://github.com/user-attachments/assets/2fb7783f-71b4-48ee-b3d3-50039dd80d3e" />

<img width="510" height="620" alt="image" src="https://github.com/user-attachments/assets/930b8a9b-fdca-433c-9a34-add4e75374a2" />


TaskflowWeek3assignment

TaskflowWeek3assignment is a full-stack React + Vite application integrated with a Node.js + Express backend and MongoDB database. The project allows users to manage tasks and students, showing active and completed tasks in real time.

Features

Task Management

Create, read, update, and delete tasks.

Mark tasks as active or completed.

Tasks are stored in MongoDB for persistence.

Student Management

Add student details such as name and age.

View all students in real time.

Integrates with backend API to fetch and store data.

Frontend

Built with React 18 and Vite for fast development and Hot Module Replacement (HMR).

Responsive and modular UI using Tailwind CSS.

Components include:

Layout.jsx – general page layout with navigation.

Navbar.jsx – top navigation bar.

Tasks.jsx – displays tasks and handles CRUD operations.

Students.jsx – displays student list and form for adding new students.

ApiData.jsx – page to fetch and display additional API data.

Dashboard.jsx – main administrative dashboard.

StudentDashboard.jsx – home view for students.

Backend

Express.js server exposing RESTful APIs for tasks and students.

MongoDB database for storing all records.

Backend files:

server.js – main entry point.

routes/tasks.js – API endpoints for tasks.

routes/students.js – API endpoints for students.

models/Task.js & models/Student.js – Mongoose models.

Utilities

api.js – frontend functions to interact with backend endpoints.

Context and hooks for theme management and local storage.

Installation & Setup

Clone the repository

git clone https://github.com/Zachariah72/react-js-jsx-and-css-mastering-front-end-development-Zachariah72.git
cd TaskflowWeek3assignment


Install dependencies

npm install
cd backend
npm install


Configure Environment Variables

Create a .env file in backend/:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run Backend

cd backend
npm run dev


Backend will run on http://localhost:5000.

Run Frontend

npm run dev


Frontend will run on http://localhost:5173 (default Vite port).

Usage

Navigate to Home to see the Student Dashboard.

Visit Tasks to view, add, or update tasks.

Visit Students to add new students and view the list.

Tasks can be marked as active or completed, which updates the database in real time.

Tech Stack

Frontend: React, Vite, Tailwind CSS, React Router

Backend: Node.js, Express.js

Database: MongoDB

Version Control: Git & GitHub

Future Improvements

Add authentication for student and admin users.

Enable task filtering by student or status.

Add real-time updates using WebSockets.

Integrate unit testing for frontend and backend.
