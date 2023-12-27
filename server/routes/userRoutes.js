const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");

// Routes for User operations
router.post("/add-user", UserController.addUser);
router.get("/get-user/:userId", UserController.getUserById);
router.get("/get-all-users", UserController.getAllUsers);

module.exports = router;
