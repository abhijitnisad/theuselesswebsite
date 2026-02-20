# 🌌 Random Useless Website Redirector

Welcome to the **Random Useless Website Redirector**, a full-stack MERN application that cures boredom by instantly teleporting you to the most delightfully useless corners of the internet.

## ✨ Features
- **Instant Teleportation**: Click the magic button to be redirected to one of over 100+ highly curated, completely useless websites.
- **Community Contributions**: Know a useless website? Users can submit new links directly to the void via a sleek glassmorphism form.
- **Ultra-Premium UI**: Designed with a deep-space aesthetic, featuring a pitch-black background, ambient glowing floating orbs, and interactive mouse-tracking lights.
- **Cinematic Animations**: Powered by Framer Motion, the app boasts buttery-smooth entrance staggers, mesmerizing hover effects, and a dynamic blur-out page transition when teleporting.
- **Modern Tech Stack**: Built with React, Vite, Node.js, Express, and Tailwind CSS.

---

## 🛠️ Technology Stack
* **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide Icons, Axios.
* **Backend**: Node.js, Express.js (Using ES6 Modules).
* **Architecture**: Complete separation of concerns (Standalone Frontend & Backend folders).

---

## 🚀 Running the Project Locally

This is a monorepo containing two completely separate applications. You will need to run two terminal windows to start both the frontend and the backend.

### 1. Start the Backend API
The backend acts as the engine, serving the randomized websites and receiving user submissions.

```bash
cd backend
npm install
npm run dev
```
*The backend will start running on `http://localhost:5000`*

### 2. Start the Frontend React App
Open a new, second terminal and boot up the visually stunning user interface.

```bash
cd frontend
npm install
npm run dev
```
*The frontend will start running on `http://localhost:5173`. Open this link in your browser!*

---

## 🌍 Deployment Guide (Vercel)

This application is designed to be easily deployed to [Vercel](https://vercel.com/) as two separate projects pointing to the exact same GitHub repository.

### Backend Deployment
1. Import your GitHub repository into Vercel.
2. Ensure the **Root Directory** is set to `backend`.
3. Go to Environment Variables and set `PORT` to `5000`.
4. Deploy! Vercel will process the included `vercel.json` file to turn your Express app into serverless functions.
5. Copy your newly generated live URL (e.g., `https://my-backend.vercel.app`).

### Frontend Deployment
1. Go back to Vercel and import the exact same GitHub repository a second time.
2. Ensure the **Root Directory** is set to `frontend`.
3. Go to Environment Variables and add `VITE_API_URL`.
4. Paste the live URL from your backend setup, appending `/api` to the end.
   *(Example Value: `https://my-backend.vercel.app/api`)*
5. Deploy! Vercel will bake the backend environment variable into the Vite build.

---

## 📁 Repository Structure

```text
theuselesswebsite/
├── backend/                  # Express REST API
│   ├── controllers/          # Business logic & Website database array
│   ├── routes/               # Express routing endpoints
│   ├── app.js                # Express app configuration & CORS
│   ├── server.js             # Server entry point
│   ├── vercel.json           # Serverless deployment config
│   └── package.json
└── frontend/                 # React UI
    ├── public/               # Static assets & Custom SVG Logo
    ├── src/
    │   ├── components/       # Reusable UI elements (RandomButton)
    │   ├── services/         # Axios API connection
    │   ├── App.jsx           # Main animated application
    │   └── index.css         # Tailwind base and custom animations
    ├── tailwind.config.js    # Theming and custom shimmer keyframes
    ├── vite.config.js
    └── package.json
```
