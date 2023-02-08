const mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  dateAdded: {
    required: true,
    type: Date,
    default: Date.now,
  },
  status: {
    required: true,
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("tasks", tasksSchema);
