# ANDISHI-TALENT

A **full-stack web application** with an integrated **Learning Management System (LMS)** built using:

- **Frontend:** [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)

---

## 🚀 Getting Started

### 1 Clone the Repository

```
git clone https://github.com/your-username/andishi-talent.git
cd andishi-talent
```

### 2 Install Frontend Dependencies
```
cd client
npm install
```

### 3 Install Backend Dependencies
```
cd ../server
npm install
```

### 4 Set Up Environment Variables
Create a .env file inside the server/ directory and add your configurations:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5 Starting the Application
#### Start Backend (Node.js)
```
cd server
npm start
```
#### Start Frontend (Next.js)
```
cd client
npm run dev
```
Now visit http://localhost:3000 in your browser to see the app in action.


## 🤝 Contributing
1. Fork the repository
2. Create a new branch: git checkout -b feature-name
3. Commit your changes: git commit -m "Added a new feature"
4. Push to the branch: git push origin feature-name
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.
