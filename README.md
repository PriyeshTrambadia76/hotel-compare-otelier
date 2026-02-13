# 🏨 Hotel Comparison App (React + Supabase)

A hotel comparison web application built using **React (Vite)**, **Supabase Authentication**, **Context API**, and **Recharts**.  
Users can sign up, log in, view hotels, select hotels to compare, and visualize price comparisons in a chart.

---

## 🚀 Features

- 🔐 Authentication (Login / Signup) using Supabase 
[Login Works with this credentials:- Username: "demo@gmail.com" || Password: "demo123"]
- 🛡 Protected routes (Dashboard & Compare)
- 📊 Hotel comparison chart (price comparison)
- 💾 Persistent compare list using LocalStorage
- 🎨 Tailwind CSS for UI styling
- ⚡ Built with Vite for fast development

---

## 🛠 Tech Stack

- **Frontend:** React + Vite
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Auth & Backend:** Supabase
- **Charts:** Recharts
- **Styling:** Tailwind CSS

---

## 📁 Project Structure

src/
├── auth/
│ └── supabase.js
├── components/
│ ├── HotelCard.jsx
│ ├── CompareChart.jsx
│ └── Navbar.jsx
├── context/
│ ├── AuthContext.jsx
│ ├── HotelContext.jsx
│ └── useAuth.js
├── layouts/
│ └── ProtectedLayout.jsx
├── pages/
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Dashboard.jsx
│ └── Compare.jsx
├── routes/
│ └── ProtectedRoute.jsx
├── App.jsx
├── main.jsx
└── index.css