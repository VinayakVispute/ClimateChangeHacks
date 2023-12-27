const express = require("express");
const router = express.Router();
const {
  sendVerificationMail,
} = require("../controllers/sendVerificationMail.js");
const { verificationDone } = require("../controllers/emailVerificationDone.js");

// Routes for NGO operations
router.post("/sendVerficationMail", sendVerificationMail);
router.get("/verifyUser/:userId", verificationDone);

module.exports = router;
