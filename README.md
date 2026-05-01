# 🔗 URL Shortener (Node.js + Express.js + EJS)

A full-stack URL Shortener web application built using Node.js, Express, and EJS.  
It allows users to convert long URLs into short, easy-to-share links and view analytics-like recent links.

---

## 🚀 Features

* 🔗 Shorten long URLs into custom or auto-generated short codes  
* 📄 View recently created short links (last 3 links)  
* 🔁 Redirect to original URL using short code  
* 📊 Student report page (/report) using EJS rendering  
* 🎨 Clean UI with EJS templates and CSS styling  
* ⚡ Lightweight file-based storage system (JSON)

---

## 🛠️ Tech Stack

* Node.js  
* Express.js  
* EJS (Templating Engine)  
* JavaScript (ES Modules)  
* File System (fs/promises) for data storage  
* HTML, CSS  

---

## 📂 Project Structure
```
NodeJS-ExpressJS-Project-URL-Shortner-With-EJS/
│
│── app.js
│── package.json
│── package-lock.json
│── .gitignore
│
├── controllers/
│ └── postshortener.controller.js
│
├── models/
│ └── shortener.model.js
│
├── router/
│ └── shortener.routes.js
│
├── views/
│ ├── header.ejs
│ ├── index.ejs
│ └── report.ejs
│
├── public/
│ ├── style.css
│ └── report.css
│
├── data/
│ └── links.json
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/godhaniyaarbham2000-spec/NodeJS-ExpressJS-Project-URL-Shortner-With-EJS.git
```
Go to project folder
```
cd NodeJS-ExpressJS-Project-URL-Shortner-With-EJS
```

Install dependencies:
```

npm install
```
---
▶️ Run Project

Start the server:
```
node app.js
```
Server will run on:
```
http://localhost:3007
```
---
💻 Usage
🔗 URL Shortener Page
```
http://localhost:3007
```
- Enter long URL  
- (Optional) add custom short code  
- Generate short link  
- Click to redirect  
---

📊 Report Page
```
http://localhost:3007/report
```
- Displays student report cards using EJS templating and server-side rendering
---
💡 Example
Input:
```
https://google.com
short code: google
```
Output:
```
http://localhost:3007/google
```
---

## ⚠️ Notes

* Data is stored in `data/links.json` (file-based storage)
* Duplicate short codes are not allowed
* If short code not found → 404 error shown
* Node modules are excluded via `.gitignore`

---

## 📌 Future Improvements

* MongoDB database integration  
* Click analytics tracking  
* User authentication system  
* UI improvements with React frontend  
* QR code generation for short links  

---

## 👨‍💻 Author

**Arbham Godhaniya**  
MERN Stack Developer  

---
