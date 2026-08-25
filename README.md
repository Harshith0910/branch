<h1 align="center">Branch</h1>

<p align="center">
  <strong>The Ultimate Link-in-Bio Solution</strong><br>
  A full-stack micro-landing page application to consolidate your digital footprint.
</p>

<p align="center">
  <a href="https://branch-lovat.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/MongoDB-Backend-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
</p>

---

## 📖 Overview

Branch solves the classic "one link in bio" problem on social media platforms. By providing a single, unified URL, users can direct their followers to a cleanly designed, mobile-responsive directory containing all their important destinations—from portfolios and YouTube channels to stores and other social profiles.

Inspired by industry leaders, Branch is built to act as a digital business card and a high-performance traffic router, prioritizing speed, simplicity, and creator ownership.

## ✨ Key Features

- **Single Unified Link:** Consolidate your entire online presence into one clean, shareable URL (`bran.ch/handle`).
- **Dynamic Routing:** Instantly generates custom profile pages based on unique user handles querying real-time database records.
- **Mobile-First Aesthetic:** Vertically stacked buttons, prominent avatars, and easily scannable text designed specifically for mobile social media traffic.
- **Frictionless Setup:** Claim a handle, upload a profile picture, add your links, and go live in minutes.
- **Real-World SaaS Architecture:** End-to-end functionality handling everything from secure database storage to fast public profile rendering.

## 🛠️ Tech Stack

Branch is engineered from scratch using modern web technologies:

- **Frontend Framework:** [Next.js](https://nextjs.org/) (v16.0.7)
- **UI Library:** [React](https://react.dev/) (v19.2.0)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Database:** [MongoDB](https://www.mongodb.com/) (^7.0.0)
- **Alerts/Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/) (^11.0.5)

## 📂 Project Structure

```text
branch/
├── app/              # Next.js App Router (Pages, Layouts, & API Routes)
├── components/       # Reusable React UI components
├── lib/              # Utility functions and MongoDB database connection setup
├── public/assets/    # Static assets (images, icons)
├── .env.example      # Example environment variables
├── next.config.mjs   # Next.js configuration
├── package.json      # Dependencies and build scripts
└── tailwind.config   # Tailwind CSS configuration
```

## 🚀 Getting Started

Follow these steps to run the Branch application locally on your machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- A MongoDB database cluster (e.g., MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/Harshith0910/branch.git
cd branch
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env.local` file in the root directory and add your MongoDB connection string.
```env
MONGODB_URI=your_mongodb_connection_string_here
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will hot-reload as you make changes to the code.

## 👤 Author

**Chittapur Harshith**
- Project Link: [https://branch-lovat.vercel.app/](https://branch-lovat.vercel.app/)

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
