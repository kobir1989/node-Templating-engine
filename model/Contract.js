const { Schema, model } = require("mongoose");

const contractSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 9,
      maxlength: 15,
    },
  },
  {
    timestamps: true,
  }
);

const Contract = model("Contract", contractSchema);

module.exports = Contract;
