const User = require("../models/user");

// Controller method to add a new user
exports.addUser = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If the email exists, return a 200 status indicating that it already exists
      return res.status(200).json({ message: "Email already exists" });
    }

    // If the email doesn't exist, create a new user
    const newUser = await User.create(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error adding user" });
  }
};

// Controller method to get a user by ID
exports.getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting user" });
  }
};

// Controller method to get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting users" });
  }
};
