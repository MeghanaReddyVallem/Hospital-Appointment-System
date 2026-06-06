const express = require("express");
const router = express.Router();

const Patient = require("../models/Patient");


// =========================
// REGISTER PATIENT
// =========================
router.post("/register", async (req, res) => {

  try {

    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).json({
      message: "Patient Registered Successfully",
      patient
    });

  } catch (error) {

    res.status(500).json({
      message: "Registration Failed",
      error: error.message
    });

  }

});


// =========================
// LOGIN PATIENT (FIXED)
// =========================
router.post("/login", async (req, res) => {

  try {

    console.log("LOGIN BODY:", req.body); // DEBUG LINE

    const { email, password } = req.body;

    // check empty input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password required"
      });
    }

    // find patient
    const patient = await Patient.findOne({
      email: email.trim()
    });

    if (!patient) {
      return res.status(404).json({
        message: "Patient Not Found"
      });
    }

    // check password
    if (patient.password.trim() !== password.trim()) {
      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    // success response
    res.status(200).json({
      message: "Login Successful",
      patient: {
        _id: patient._id,
        name: patient.name,
        email: patient.email
      }
    });

  } catch (error) {

    res.status(500).json({
      message: "Login Error",
      error: error.message
    });

  }

});

module.exports = router;