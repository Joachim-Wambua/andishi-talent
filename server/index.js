// index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const logger = require("./utils/logger");
const { handleErrors, AppError } = require("./utils/errorUtils");

// Import routes
const authRoutes = require("./routes/auth");
const applicationRoutes = require("./routes/application");
const contactRoutes = require("./routes/contact");
const newsletterRoutes = require("./routes/newsletter");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => logger.info("Connected to MongoDB"))
  .catch((err) => logger.error(`MongoDB connection error: ${err.message}`));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

app.get("/", (req, res) => {
  res.send("Andishi Talent Server is running!");
});

// 404 handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(handleErrors);

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  logger.error(`${err.name}: ${err.message}`);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  logger.error("UNHANDLED REJECTION! 💥 Shutting down...");
  logger.error(`${err.name}: ${err.message}`);
  process.exit(1);
});
