const newsletterService = require("../services/newsletterService");

// Subscribe to newsletter
exports.subscribe = async (req, res) => {
  try {
    const { email, consent } = req.body;
    const subscriber = await newsletterService.subscribeUser(email, consent);
    res.status(201).json({ message: "Subscription successful", subscriber });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Unsubscribe from newsletter
exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    await newsletterService.unsubscribeUser(email);
    res.status(200).json({ message: "Unsubscribed successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all subscribers
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await newsletterService.getAllSubscribers();
    res.status(200).json(subscribers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
