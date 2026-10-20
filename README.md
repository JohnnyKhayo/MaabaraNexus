# MaabaraNexus

A modern laboratory platform that allows the public to explore diagnostic services while giving laboratory staff and administrators a secure system to track samples from arrival to result.

## Problem

Many laboratories still rely on manual processes to track samples. This increases the risk of delays, mix-ups, and poor visibility. At the same time, patients and clients often lack a clear, professional way to understand the services a lab offers and how to contact them.

## Solution

MaabaraNexus solves both problems in one application:

- **Public users** can learn about laboratory services, read about the lab, and get in touch.
- **Staff and Admin** can securely manage samples with role-based access, search, filtering, and status updates.

The application uses Firebase for authentication and data storage, ensuring real persistence without relying on localStorage as the main database.

## Features

### Public
- Professional homepage with services overview
- Dedicated Services page
- About page
- Contact page with form
- Responsive design

### Laboratory Staff & Admin
- User registration and login (Firebase Authentication)
- Role-based access (Staff and Admin)
- Create new samples with confirmation step
- View, search, and filter samples
- Update sample status and results
- Admin-only sample deletion
- Dashboard with status summary
- Protected routes
- Profile dropdown with user information

### General
- Loading, error, and empty states
- Clean and consistent user interface
- Session persistence

## Technologies Used

- **React** (Vite)
- **React Router**
- **Tailwind CSS**
- **React Icons**
- **Firebase**
  - Authentication
  - Firestore
- **shadcn/ui** (components)

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm
- A Firebase project

### 1. Clone the repository
```bash
git clone https://github.com/your-username/maabara-nexus.git
cd maabara-nexus
```
## 2. Install dependencies
```
npm install
```
This installs React, Vite, Tailwind CSS, React Router, Firebase, React Icons, and other required packages.

## 3. Firebase Configuration
1. Create a project in the Firebase Console.
2. Enable Authentication → Email/Password.
3. Create a Firestore Database (start in test mode for development).
4. Create a file called src/firebase.js and add your Firebase config:
```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

```
## 4. Run the development server
```
npm run dev
```
Open http://localhost:5173 in your browser.

## Deployment
The project is deployed on Vercel.Live Site: https://maabara-nexus.vercel.app/

## Screenshots
Homepage
Services
Sample Management
Dashboard

## Challenges and Lessons Learned
. Separating public-facing pages from protected laboratory tools required careful route and navbar logic.
. Implementing role-based access (Staff vs Admin) while keeping the code clean.
. Moving from temporary in-memory data to Firebase Firestore.
. Designing a professional public interface while maintaining a functional internal tool.
. Handling loading, error, and confirmation states for better user experience and data safety.
## Project Structure
src/
├── components/
│   ├── layout/
│   ├── samples/
│   └── shared/
├── pages/
├── context/
├── services/
├── firebase.js
└── App.jsx
## Auther
Johnstone Khayo
React Frontend Capstone Project








