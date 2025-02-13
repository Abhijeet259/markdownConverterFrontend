# ✨ Markdown Editor Frontend

This is the frontend for the **Markdown Editor** application. It provides a **real-time Markdown preview** and interacts with the backend API to convert Markdown into HTML.

---

## 📌 Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** – [Download Here](https://nodejs.org/)
- **npm** (Node Package Manager) – Comes with Node.js
- **Backend API** (Check [Backend Setup Guide](../backend/README.md)) running on `http://localhost:8000/`

---

## 📂 1. Clone the Repository

If this project is hosted on GitHub, clone it using:

```sh
git clone https://github.com/Abhijeet259/markdownConverterFrontend.git
cd markdownConverterFrontend
```

## 📦 2. Install Dependencies
Navigate to the frontend folder and install all required dependencies:

```sh
npm install
```
This installs all the necessary Node.js modules required for the frontend.

## 🛠 3. Configure API URL
By default, the frontend fetches Markdown conversion from the backend running on http://localhost:8000/. If the backend is hosted elsewhere, update the config.js file.

Open src/config/config.js and set the API URL:

javascript
```sh
const CONFIG = {
  API_BASE_URL: "http://localhost:8000", // Change this for production
};

export default CONFIG;
```

## 🚀 4. Start the Frontend Server
To start the React development server, run:

```sh
npm start
```
This will start the app and open it in your default web browser at:

```sh
http://localhost:5173/
```
If it does not open automatically, you can manually visit http://localhost:5173/ in your browser.

## 🖥 5. Features
-✅ Real-time Markdown Editing – Type Markdown and see live HTML preview
-✅ Auto-Sync with Backend – Calls API to convert Markdown dynamically
-✅ Responsive UI – Works on both desktop & mobile

## 🎯 Conclusion
The frontend is successfully set up and running at http://localhost:5173/.
The Markdown preview syncs in real-time with backend API.
API connection can be verified using the browser’s Network tab.