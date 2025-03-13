// routes/application.js
const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

// Public route for submitting applications
router.post("/submit-application", applicationController.submitApplication);

// Protected admin routes
router.get(
  "/get-all",
  protect,
  restrictTo("admin"),
  applicationController.getAllApplications
);
router.get(
  "/:id",
  protect,
  restrictTo("admin"),
  applicationController.getApplicationById
);
router.put(
  "/:id",
  protect,
  restrictTo("admin"),
  applicationController.updateApplication
);
router.delete(
  "/:id",
  protect,
  restrictTo("admin"),
  applicationController.deleteApplication
);
module.exports = router;
