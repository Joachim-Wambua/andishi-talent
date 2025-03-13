// services/contactService.js
const Contact = require("../models/contact");
const { AppError } = require("../utils/errorUtils");

exports.createContact = async (contactData) => {
  try {
    const newContact = new Contact(contactData);
    return await newContact.save();
  } catch (error) {
    throw new Error(`Error creating contact message: ${error.message}`);
  }
};

exports.getContacts = async (filters = {}) => {
  try {
    return await Contact.find(filters).sort({ submittedAt: -1 });
  } catch (error) {
    throw new Error(`Error fetching contact messages: ${error.message}`);
  }
};

exports.updateContactStatus = async (id, status) => {
  try {
    return await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );
  } catch (error) {
    throw new Error(`Error updating contact status: ${error.message}`);
  }
};

// Add other service functions as needed

exports.getContactById = async (id) => {
  try {
    return await Contact.findById(id);
  } catch (error) {
    throw new Error(`Error fetching contact message: ${error.message}`);
  }
};

exports.updateContact = async (id, updateData) => {
  try {
    return await Contact.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    throw new Error(`Error updating contact message: ${error.message}`);
  }
};

exports.deleteContact = async (id) => {
  try {
    return await Contact.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting contact message: ${error.message}`);
  }
};
