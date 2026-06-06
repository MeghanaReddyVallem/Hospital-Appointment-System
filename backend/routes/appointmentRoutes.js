const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");


// ✅ BOOK APPOINTMENT
router.post("/bookAppointment", async (req, res) => {

  try {

    const appointment = new Appointment(req.body);

    await appointment.save();

    res.status(201).json({
      message: "Appointment Booked Successfully",
      appointment,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});


// ✅ GET ALL APPOINTMENTS (ADMIN)
router.get("/getAppointments", async (req, res) => {

  try {

    const data = await Appointment.find()
      .populate("patient_id")
      .populate("doctor_id");

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});


// ✅ UPDATE STATUS (APPROVE / REJECT / CONSULTED)
router.put("/updateStatus/:id", async (req, res) => {

  try {

    await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status }
    );

    res.json({
      message: "Status Updated Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error updating status"
    });

  }

});


// ✅ HISTORY (ADMIN ONLY)
router.get("/history", async (req, res) => {

  try {

    const data = await Appointment.find()
      .populate("patient_id")
      .populate("doctor_id");

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


// EXPORT
module.exports = router;