// services/applicationService.js
const Application = require("../models/Application");
const { AppError } = require("../utils/errorUtils");

exports.createApplication = async (applicationData) => {
  try {
    const newApplication = new Application(applicationData);
    return await newApplication.save();
  } catch (error) {
    throw error; // Let the error middleware handle it
  }
};

exports.getApplicationById = async (id) => {
  const application = await Application.findById(id);
  if (!application) {
    throw new AppError("Application not found", 404);
  }
  return application;
};

// Update other methods similarly to use errorUtils
exports.getApplications = async (filters = {}) => {
  try {
    return await Application.find(filters).sort({ submittedAt: -1 });
  } catch (error) {
    throw new Error(`Error fetching applications: ${error.message}`);
  }
};

exports.updateApplication = async (id, updateData) => {
  try {
    return await Application.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    throw new Error(`Error updating application: ${error.message}`);
  }
};

exports.deleteApplication = async (id) => {
  try {
    return await Application.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting application: ${error.message}`);
  }
};
