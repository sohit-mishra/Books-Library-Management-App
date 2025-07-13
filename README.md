# 📚 Books Library Management App

A full-stack MERN (MongoDB, Express.js, React, Node.js) application inspired by GoodReads. This app allows users to register, log in, view books, add them to their reading list, update reading progress, and rate books.

---

## 🚀 Live Demo

🔗 [Visit App](https://books-library-management-app-1.onrender.com/)

---

## 📌 Features

### 🔐 User Authentication

- Register with email & password (hashed using **bcrypt**)
- Login via JWT and store sessions in **HTTP-only cookies**
- Logout with session cleanup
- Auth state managed with **Context API**

### 🧭 Navigation Bar

- Links: Home, My Books, Login/Register, Logout
- Shows logged-in user's email
- Conditional navigation (based on auth status)

### 🏠 Home Page

- Fetch and display all books from MongoDB
- Uses **BookCard** component for display
- "Want to Read" button adds to user’s reading list (if logged in)

### 📚 My Books Page

- Shows user’s personal book list
- Update **reading status** (Want to Read / Currently Reading / Read)
- Update **rating** (1–5 stars)

### ⚙️ State Management

- Managed using **React Context API**
- Authentication and book data stored in global state

---

## 🧪 Tech Stack

| Layer           | Tech                                     |
| --------------- | ---------------------------------------- |
| Frontend        | React, Axios, React Router, Tailwind CSS |
| State           | React Context API                        |
| Backend         | Node.js, Express.js                      |
| Auth            | JWT, bcrypt, Cookies                     |
| Database        | MongoDB + Mongoose                       |
| Deployment      | Frontend: Render                         |
| Backend:        | Render                                   |
| Hosting Support | HTTPS-only cookies                       |

---

## 🧾 API Endpoints

### 🔐 Auth

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register user    |
| POST   | `/api/auth/login`    | Login user       |
| GET    | `/api/auth/logout`   | Logout user      |
| GET    | `/api/auth/me`       | Get current user |

### 📚 Books (Public)

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | `/api/books` | Get all books |

### 📖 My Books (Protected)

| Method | Endpoint                      | Description               |
| ------ | ----------------------------- | ------------------------- |
| GET    | `/api/mybooks`                | Get user’s books          |
| POST   | `/api/mybooks/:bookId`        | Add book to user’s list   |
| PATCH  | `/api/mybooks/:bookId/status` | Update reading status     |
| PATCH  | `/api/mybooks/:bookId/rating` | Update rating (1–5 stars) |

---

## 🛠️ Setup Instructions

### 🔧 Backend Setup

1. Clone repo:

   ```bash
   git clone https://github.com/your-username/books-library-management-app.git
   cd npm run start
   ```

2. Install dependencies:

   ```bash
   install-all
   ```

3. Create .env file in /backend:

   ```bash
   PORT=
   JWT_SECRET=
   FRONTEND_URL=
   MONGODB_URI=
   ```

4. Create .env file in /Frontend:

   ```
   # VITE_API_URL should point to your backend server
   VITE_API_URL=http://localhost:5000/
   ```


5. Run server:

   ```
   npm run start
   ```