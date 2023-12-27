const Ngo = require("../models/ngo");

// Controller method to add a new NGO
exports.addNgo = async (req, res) => {
  try {
    const newNgo = await Ngo.create(req.body);
    res.status(201).json(newNgo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding NGO" });
  }
};

// Controller method to get an NGO by ID
exports.getNgoById = async (req, res) => {
  const ngoId = req.params.ngoId;

  try {
    const ngo = await Ngo.findById(ngoId);
    if (!ngo) {
      return res.status(404).json({ error: "NGO not found" });
    }
    res.status(200).json(ngo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting NGO" });
  }
};

// Controller method to get all NGOs
exports.getAllNgos = async (req, res) => {
  try {
    const ngos = await Ngo.find();
    res.status(200).json(ngos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting NGOs" });
  }
};
