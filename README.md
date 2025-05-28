# 💼 Personal Portfolio – Suryaprakash J

A modern, responsive personal portfolio showcasing my projects, skills, achievements, and personality — blending technology with creativity and passion.

---

## 🚀 Tech Stack

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend (if applicable):** Node.js / Express
- **Database:** MongoDB (Local)
- **Others:** Git & GitHub, React Icons, CSS Modules

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

---

## 🧩 MongoDB Configuration (Local)

1. **Start MongoDB server locally**

   Make sure MongoDB is installed and run:

   ```bash
   mongod
   ```

2. **Insert preset user (for login testing)**

   In a new terminal:

   ```bash
   mongo
   ```

   Then run:

   ```js
   use portfolioDB
   db.users.insertOne({ username: "admin", password: "password123" })
   ```

---

## ▶️ Run the Portfolio Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Visit in browser**

   ```
   http://localhost:3000
   ```

---

## 🔐 Preset Login Credentials (For Test Login)

- **Username:** `admin`  
- **Password:** `password123`

---

## 🧠 Features

- Project showcase with icons and GitHub links  
- Skills grid with custom images  
- Timeline-styled achievements  
- Clean UI and mobile responsive  
- Optional backend login with MongoDB

---

## 📫 Contact

- 📧 Email: your.email@example.com  
- 🔗 LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)  
- 🧑‍💻 GitHub: [github.com/your-username](https://github.com/your-username)

---

## 📜 License

This project is licensed under the MIT License.

---

> Made by Suryaprakash J
