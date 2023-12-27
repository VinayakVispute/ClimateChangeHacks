const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const categoryRoutes = require("./routes/categoryRoutes");
const connectDB = require("./db/connect");

const userRoutes = require("./routes/userRoutes");
const ngoRoutes = require("./routes/ngoRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const sendVerificationMail = require("./routes/sendVerificationMail");
require("dotenv").config();
app.use(
  cors({
    origin: [
      "https://dev-ybh302xorvllwlkr.us.auth0.com",
      "http://localhost:3000",
      "https://ecofootprint.netlify.app/",
      "https://ecofootprint.netlify.app",
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// For testing Purpose
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/", sendVerificationMail);
app.use("/user", userRoutes);
app.use("/ngo", ngoRoutes);
app.use("/certificate", certificateRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
