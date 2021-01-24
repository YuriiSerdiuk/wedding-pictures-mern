const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  photos: Array,
  owner: { type: Types.ObjectId, ref: "User" },
  delay: Number,
  sound: String,
});

module.exports = model("Slider", schema);
