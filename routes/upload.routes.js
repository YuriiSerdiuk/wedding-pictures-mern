const { Router } = require("express");
var fs = require("file-system");
const { regType } = require("../utils/constants");
const { baseUrl } = require("../utils/apiConstants");

const Photo = require("../models/Photo");
const router = Router();

// get imaget,in post method
router.post("/photos", async (req, res) => {
  try {
    const { userId } = req.body;
    const photos = await Photo.find({ owner: userId });

    res.json(photos);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

// add image
router.post("/photo", async (req, res) => {
  try {
    const { name, userId, base64, base64Type } = req.body;

    //create folder
    console.log("dir", req.body.name);
    const dir = `uploads/${userId}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const filepath = `uploads/${userId}/${[name]}`;
    const dataNew = base64.replace(regType[base64Type], "");
    const buf = new Buffer.from(dataNew, "base64");
    fs.writeFileSync(filepath, buf, (err) => {
      if (err) throw err;
      console.log("The file was succesfully saved!");
    });

    const photo = new Photo({
      href: `${baseUrl.develop}/${filepath}`,
      // href: `${baseUrl.heroku}/${filepath}`,
      name: name,
      owner: userId,
    });

    await photo.save();

    res.status(201).json({ image: `${baseUrl.heroku}/${filepath}` });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

// /upload/delete
router.post("/delete", async (req, res) => {
  try {
    const { id, owner } = req.body;
    await Photo.deleteOne({ _id: id });
    const photos = await Photo.find({ owner: owner });
    res.status(201).json({ photos });
  } catch (e) {
    res.status(500).json({ message: "Some problems with delete Photo" });
  }
});

module.exports = router;
