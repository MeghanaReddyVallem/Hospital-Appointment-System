const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },

  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },

  problem: {
    type: String,
  },

  appointment_date: {
    type: String,
  },

  appointment_time: {
    type: String,
  },

  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);