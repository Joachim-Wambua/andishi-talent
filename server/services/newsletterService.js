const Newsletter = require("../models/Newsletter");

// Subscribe user
exports.subscribeUser = async (email, consent) => {
  if (!email || consent !== true) {
    throw new Error("Email and consent are required");
  }

  const existingSubscriber = await Newsletter.findOne({ email });
  if (existingSubscriber) {
    throw new Error("Email already subscribed");
  }

  const newSubscriber = new Newsletter({ email, consent });
  await newSubscriber.save();

  return newSubscriber;
};

// Unsubscribe user
exports.unsubscribeUser = async (email) => {
  const deletedSubscriber = await Newsletter.findOneAndDelete({ email });

  if (!deletedSubscriber) {
    throw new Error("Email not found");
  }

  return deletedSubscriber;
};

// Get all subscribers
exports.getAllSubscribers = async () => {
  return await Newsletter.find().sort({ subscribedAt: -1 });
};
