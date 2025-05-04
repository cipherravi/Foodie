# Foodie – Swiggy Clone (Full-Stack)

**Foodie** is a fully functional and responsive Swiggy-inspired food delivery web application. It offers real-time restaurant data, search functionality, cart management, user authentication, and more — built with a custom backend that bypasses CORS using a proxy and integrates with the Swiggy API.

Live Demo: [Click here to try it out](https://cipherravi-foodie.vercel.app/)

---

## Features

- **Modern UI** inspired by Swiggy
- **Responsive Design** for mobile, tablet, and desktop
- **Authentication**: Sign up, Login, and Protected Routes
- **Dynamic Restaurant Listings** (infinite scroll)
- **Restaurant Details Page** with full menu
- **Search Suggestions** while typing
- **Filters & Sorting** by rating, delivery time, and cost
- **Cart Management** with persistent state
- **Custom Backend**:
  - Proxy server to fetch real Swiggy data and bypass CORS
  - Connected to a **live database** (stores user & cart data)
- **CI/CD Pipeline**: Auto deployment on GitHub push
- **Performance Optimized** (checked using DevTools)

---

## Tech Stack

### Frontend:

- **React.js**
- **React Router**
- **Tailwind CSS**
- **Redux & Context API**
- **Fetch API**

### Backend:

- **Node.js**
- **Express.js**
- **Custom API Gateway** (for Swiggy API integration)
- **MongoDB** (for user & cart data)

### DevOps:

- **Render / Vercel** for deployment
- **MongoDB Atlas** for DB hosting

---

## Screenshots

> Add 2-3 screenshots here: homepage, restaurant page, cart page

---

## Getting Started (Local Setup)

```bash
# Clone the repository
git clone https://github.com/cipherravi/Foodie.git
cd Foodie

# Install dependencies for frontend
cd frontend
npm install

# Start frontend
npm start

# Install backend
cd ../backend
npm install

# Start backend
node index.js
```

#### License:

- This project is licensed under the MIT License.

#### Author:

**Ravi yadav**
Self-taught full-stack developer passionate about building real-world web apps.

#### Contributing:

- Pull requests are welcome! If you’d like to suggest improvements, feel free to fork the repo and submit a PR.
