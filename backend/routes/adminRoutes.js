const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// REGISTER
router.post("/register", async (req, res) => {

  try {

    const admin = new Admin(req.body);
    await admin.save();

    res.json({ message: "Admin Registered Successfully" });

  } catch (err) {

    res.status(500).json({ message: "Error registering admin" });

  }

});

// LOGIN
router.post("/login", async (req, res) => {

  try {

    const admin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid Credentials"
      });
    }

    res.json({
      message: "Login Success",
      admin
    });

  } catch (err) {

    res.status(500).json({ message: "Error" });

  }

});

module.exports = router;