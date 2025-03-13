// controllers/contactController.js
const contactService = require("../services/contactService");

exports.submitContact = async (req, res) => {
  try {
    const newContact = await contactService.createContact(req.body);
    res.status(201).json({ 
      success: true, 
      message: "Message sent successfully",
      data: newContact
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: "Failed to send message", 
      error: error.message 
    });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getContacts();
    res.status(200).json({ 
      success: true, 
      count: contacts.length,
      data: contacts 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: "Failed to fetch messages", 
      error: error.message 
    });
  }
};

// Add more controller methods for getContactById, updateContact, deleteContact
// similar to the application controller above