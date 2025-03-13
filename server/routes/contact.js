// routes/contact.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/submit", contactController.submitContact);
router.get("/get-all", contactController.getAllContacts);
// Add more routes for getContactById, updateContact, deleteContact

module.exports = router;