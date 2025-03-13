const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  secondName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  location: {
    type: String,
    enum: ["Nairobi", "Kiambu", "Nakuru", "Other"],
    required: true,
  },
  courseInterest: {
    type: String,
    enum: [
      "Fullstack Web Development",
      "Mobile App Development",
      "AI & Machine Learning",
      "Blockchain Development",
      "UI/UX Design",
    ],
    required: true,
  },
  skillLevel: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  primaryGoal: {
    type: String,
    enum: [
      "Start a career in tech",
      "Upskill for my current job",
      "Build my own tech projects",
      "Explore tech as a hobby",
    ],
    required: true,
  },
  startDate: {
    type: String,
    enum: ["Immediately", "May Intake", "September Intake"],
    required: true,
  },
  learningSchedule: {
    type: String,
    enum: ["Weekdays (Morning)", "Weekdays (Evening)", "Weekends", "Flexible"],
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
