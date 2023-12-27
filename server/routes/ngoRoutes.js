const express = require("express");
const router = express.Router();
const NgoController = require("../controllers/ngoControllers");

// Routes for NGO operations
router.post("/add-ngo", NgoController.addNgo);
router.get("/get-ngo/:ngoId", NgoController.getNgoById);
router.get("/get-all-ngos", NgoController.getAllNgos);

module.exports = router;
