const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  photos: Array,
  owner: { type: Types.ObjectId, ref: "User" },
  interval: Number,
  sliderAnimation:String,
  sound: String,
});

module.exports = model("Slider", schema);
