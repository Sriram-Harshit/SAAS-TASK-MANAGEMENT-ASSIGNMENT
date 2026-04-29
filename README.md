# 🚀 Mini SaaS Task Management System

A full-stack task management application with secure authentication and multi-user functionality.
Each user gets their own private workspace to create, manage, and track tasks.

---

## ✨ Features

- 🔐 **Authentication**
  - Signup & Login
  - Password hashing (bcrypt)
  - JWT-based authentication
  - Protected routes

- 📋 **Task Management**
  - Create tasks
  - View only your tasks
  - Mark tasks as completed
  - Delete tasks

- 🧠 **Multi-user Support**
  - Strict user-task relationship
  - No data leakage between users

- 🎨 **Modern UI**
  - React + Tailwind CSS
  - Glassmorphism design
  - Responsive layout

---

## 🏗️ Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (Supabase)

### Authentication

- JWT (JSON Web Tokens)
- bcrypt

---

## 📁 Project Structure

```
TaskManagement/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── main.jsx
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/Sriram-Harshit/SAAS-TASK-MANAGEMENT-ASSIGNMENT/
cd SAAS-TASK-MANAGEMENT-ASSIGNMENT
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
DB_URL=your_postgresql_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 API Endpoints

### Auth

```
POST /api/auth/signup
POST /api/auth/login
```

### Tasks (Protected)

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

## 🧪 Demo Flow

1. Signup a new user
2. Login and receive JWT token
3. Create tasks
4. Mark tasks as completed
5. Delete tasks

---

<!--
## 🚀 Deployment

- Frontend: Vercel / Netlify
- Backend: Railway / Render
- Database: Supabase

---

## 🧠 Learning Highlights

- Built a full-stack SaaS architecture
- Implemented secure authentication flow
- Designed RESTful APIs
- Managed relational database with Sequelize
- Created protected frontend routes

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📄 License

This project is open-source and available under the MIT License.

--- -->
