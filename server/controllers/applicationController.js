// controllers/applicationController.js
const applicationService = require("../services/applicationService");

exports.submitApplication = async (req, res) => {
  try {
    const newApplication = await applicationService.createApplication(req.body);
    res.status(201).json({ 
      success: true, 
      message: "Application submitted successfully",
      data: newApplication
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: "Failed to submit application", 
      error: error.message 
    });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await applicationService.getApplications();
    res.status(200).json({ 
      success: true, 
      count: applications.length,
      data: applications 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: "Failed to fetch applications", 
      error: error.message 
    });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const application = await applicationService.getApplicationById(req.params.id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }
    
    res.status(200).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch application",
      error: error.message
    });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const updatedApplication = await applicationService.updateApplication(
      req.params.id,
      req.body
    );
    
    if (!updatedApplication) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Application updated successfully",
      data: updatedApplication
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update application",
      error: error.message
    });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const deletedApplication = await applicationService.deleteApplication(req.params.id);
    
    if (!deletedApplication) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Application deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete application",
      error: error.message
    });
  }
};