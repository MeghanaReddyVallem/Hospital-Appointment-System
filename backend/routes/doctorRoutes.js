const express = require("express");
const router = express.Router();

const Doctor = require("../models/Doctor");


// CREATE Doctor
router.post("/addDoctor", async (req, res) => {
  try {

    const doctor = new Doctor(req.body);

    await doctor.save();

    res.status(201).json({
      message: "Doctor Added Successfully",
      doctor,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// READ Doctors
router.get("/getDoctors", async (req, res) => {
  try {

    const doctors = await Doctor.find();

    res.json(doctors);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// UPDATE Doctor
router.put("/updateDoctor/:id", async (req, res) => {
  try {

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Doctor Updated Successfully",
      updatedDoctor,
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// DELETE Doctor
router.delete("/deleteDoctor/:id", async (req, res) => {
  try {

    await Doctor.findByIdAndDelete(req.params.id);

    res.json({
      message: "Doctor Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;