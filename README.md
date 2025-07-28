````markdown
# 📚 React BookList

A simple React application for managing a list of books. Users can add, edit, and delete book entries. Data is persisted using `json-server` as a mock REST API.

---

## 🚀 Features

- Add new books
- Edit book titles
- Delete books
- Uses Context API for state management
- JSON server for backend simulation

---

## 🛠 Tech Stack

- React
- Vite
- Axios
- JSON Server

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mirmadiha/react-booklist.git
cd react-booklist

# Install dependencies
npm install
````

---

## 🧑‍💻 Running the Project

### Start the React App

```bash
npm start
```

### Start the JSON Server (in a separate terminal)

```bash
npx json-server --watch db.json --port 3001
```

---

## 🌐 Available At

* React App: `http://localhost:3000`
* JSON Server: `http://localhost:3001/books`

---

## 📁 Project Structure

```
react-booklist/
├── public/
├── src/
│   ├── components/
│   │   ├── BookCreate.jsx
│   │   ├── BookEdit.jsx
│   │   ├── BookList.jsx
│   │   └── BookShow.jsx
│   ├── context/
│   │   └── books.js
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── api.http
├── package.json
└── vite.config.js
```

---

## 📌 Notes

* The project uses React functional components and hooks.
* JSON server is used to simulate a backend — no actual database required.
* Book data is stored in `db.json`.

---
