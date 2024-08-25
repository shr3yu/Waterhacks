// Connecting to database
require("dotenv").config();
const config = require("./configure.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Imoprting models (structure of the data we are going to store)
// Look under organization.js for more info
const Organization = require("./models/organization.model");

// To start up server
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// API request to store another organization
app.post("/add-organization", async (req, res) => {
  const { name, tags, description, link } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ error: true, message: "Name of organization is required." });
  }

  if (!tags) {
    return res.status(400).json({
      error: true,
      message: "Tags related to organization are required.",
    });
  }

  if (!description) {
    return res.status(400).json({
      error: true,
      message: "Description of organization is required.",
    });
  }
  // somehow we need to validate if its an actual link
  if (!link) {
    return res
      .status(400)
      .json({ error: true, message: "Link of organization is required." });
  }

  const isOrg = await Organization.findOne({ name: name });
  if (isOrg) {
    return res.json({ error: true, message: "Organization exists." });
  }

  const organization = new Organization({
    name,
    tags,
    description,
    link,
  });

  await organization.save();

  return res.json({
    error: false,
    organization,
    message: "Organization added.",
  });
});

//API request to get all the organization
app.get("/get-all", async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.json({ error: false, organizations });
  } catch (error) {
    res
      .status(500)
      .json({ error: true, message: "Failed to fetch organizations." });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

module.exports = app;
