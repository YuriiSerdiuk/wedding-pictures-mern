const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  imagesInSlider: Array,
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Slider", schema);
