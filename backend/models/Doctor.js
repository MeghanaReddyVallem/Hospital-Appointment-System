const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  specialization: {
    type: String,
  },

  experience: {
    type: Number,
  },

  consultation_fee: {
    type: Number,
  },

  available_time: {
    type: String,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);