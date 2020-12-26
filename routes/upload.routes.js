const { Router } = require("express");
var fs = require("file-system");
const { regType } = require("../utils/constants");
const { baseUrl } = require("../utils/apiConstants");
const User = require("../models/User");
const Photo = require("../models/Photo");
const router = Router();

router.get("/photo", (req, res) => {
  res.json({ test: " get message!" });
});

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
    console.log("filepath", `${baseUrl.heroku}/${filepath}`);

    const dataNew = base64.replace(regType[base64Type], "");
    const buf = new Buffer.from(dataNew, "base64");
    fs.writeFileSync(filepath, buf, (err) => {
      if (err) throw err;
      console.log("The file was succesfully saved!");
    });

    const photo = new Photo({
      href: `${baseUrl.heroku}/${filepath}`,
      name: name,
      owner: userId,
    });

    await photo.save();

    res.status(201).json({ image: `${baseUrl.host}/${filepath}` });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
