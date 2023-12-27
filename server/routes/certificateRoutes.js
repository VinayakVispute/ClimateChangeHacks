const express = require("express");
const router = express.Router();
const CertificateController = require("../controllers/certificateControllers");

// Routes for Certificate operations
router.post("/add-certificate", CertificateController.addCertificate);
router.get("/get-all-certificates", CertificateController.getAllCertificates);
router.get(
  "/get-certificate/:certId",
  CertificateController.getCertificateById
);
router.get(
  "/get-certificates-by-user/:userId",
  CertificateController.getCertificatesByUserId
);
router.get(
  "/get-certificates-by-ngo/:ngoId",
  CertificateController.getCertificatesByNgoId
);
router.get(
  "/get-certificates-by-user-and-ngo/:userId/:ngoId",
  CertificateController.getCertificatesByUserAndNgoIds
);

module.exports = router;
