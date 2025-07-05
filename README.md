# 📚 Minimal Library Management System

A minimalist library management application built with **React**, **Redux Toolkit Query**, **Node.js**, and **MongoDB**. It allows users to perform basic book management and borrowing operations through a clean, responsive UI. No authentication required.

---
## 📌 Submission Info

- 🌐 [Live Link](https://library-management-client-sage.vercel.app/)
- 👉 [Client GitHub Repo](https://github.com/khairul1036/Library-Management-Client)
- 👉 [Server GitHub Repo](https://github.com/khairul1036/Library-Management-API-Assignment-3)
---

## 🚀 Features

### 🔓 Public Routes (No Login Required)
- All functionalities are open to public users.

### 📖 Book Management
- **Book List**: View all books in a table/grid.
- **Add Book**: Create new book entries.
- **Edit Book**: Update book details with business logic (e.g., availability based on copies).
- **Delete Book**: Remove books with confirmation.
- **Borrow Book**: Borrow a book with quantity & due date input.

### 🔁 Borrow Summary
- Shows a summary of all borrowed books.
- Includes Book Title, ISBN, and total quantity borrowed.

### 📱 Responsive Design
- Fully responsive layout for desktop, tablet, and mobile devices.

### ✅ Business Logic
- Copies = 0 → `available: false`
- Copies ≥ 1 → `available: true`
- Borrowing quantity cannot exceed available copies.

---

## 🛠️ Tech Stack

### 📦 Frontend
- **React** + **TypeScript**
- **Redux Toolkit** + **RTK Query**
- **React Router DOM**
- **Tailwind CSS**
- **React Hook Form** + **Zod** (for validation)
- **React Hot Toast** (notifications)
- **Vite** (build tool)

### 🔧 Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Modular MVC Architecture**

---


## 🧰 Setup Instructions

### 💻 Frontend Setup

#### 1. Clone the Repository:
```bash
git clone https://github.com/khairul1036/Library-Management-Client
cd Library-Management-Client
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Start the development server
```bash
npm run dev
```
