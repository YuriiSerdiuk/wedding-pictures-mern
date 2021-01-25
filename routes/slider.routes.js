const { Router } = require("express");
const Slider = require("../models/Slider");
const User = require("../models/User");
const router = Router();

//get Slider
router.get("/", async (req, res) => {
  try {
    const sliderId = req.query["0"];
    // get slider
    const slider = await Slider.findOne({ _id: sliderId });
    // console.log("sliderId", slider);

    res.status(200).json({ slider });
  } catch (error) {
    res.status(500).json({ message: "Some problems with get slider" });
  }
});

// add  new slider
router.post("/", async (req, res) => {
  try {
    const { userId, photos } = req.body;

    const slider = new Slider({
      photos,
      owner: userId,
      delay: 5000,
      sound: "href//todo",
    });

    await slider.save();

    const user = await User.findOne({ _id: userId });

    res.status(201).json({ user: user, slider });
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json({ message: "Что-то пошло не так при добавлении слайдера" });
  }
});
module.exports = router;
