const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "Please provide author name"],
      maxlength: 400,
    },
    bookName: {
      type: String,
      required: [true, "Please provide bookName"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["Borrowed", "Returned", "Available"],
      default: "Borrowed",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
