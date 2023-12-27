const Certificate = require("../models/certification");

// Controller method to add a new certificate
exports.addCertificate = async (req, res) => {
  try {
    const { numTrees, Description, treeName, occasion } = req.body;
    console.log(numTrees, Description, treeName, occasion);
    const newCertificate = await Certificate.create(req.body);
    res.status(201).json({
      success: true,
      message: "Certificate added successfully",
      data: newCertificate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error adding certificate",
      error: error.message,
    });
  }
};

// Controller method to get all certificates
exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.status(200).json(certificates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting certificates" });
  }
};

// Controller method to get a certificate by ID
exports.getCertificateById = async (req, res) => {
  const certId = req.params.certId;

  try {
    const certificate = await Certificate.findById(certId);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting certificate" });
  }
};

// Controller method to get certificates by user ID
exports.getCertificatesByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const certificates = await Certificate.find({ user: userId });
    res.status(200).json(certificates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting certificates by user ID" });
  }
};

// Controller method to get certificates by NGO ID
exports.getCertificatesByNgoId = async (req, res) => {
  const ngoId = req.params.ngoId;

  try {
    const certificates = await Certificate.find({ ngo: ngoId });
    res.status(200).json(certificates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting certificates by NGO ID" });
  }
};

// Controller method to get certificates by both user and NGO IDs
exports.getCertificatesByUserAndNgoIds = async (req, res) => {
  const userId = req.params.userId;
  const ngoId = req.params.ngoId;

  try {
    const certificates = await Certificate.find({ user: userId, ngo: ngoId });
    res.status(200).json(certificates);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error getting certificates by user and NGO IDs" });
  }
};
