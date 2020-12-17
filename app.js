const express = require("express");
const app = express();
const server = require("http").Server(app);
const PORT = 9988;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(express.static("uploads"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// //=======router
// app.use("/auth", require("./routes/auth.routes"));
// app.use("/upload", require("./routes/upload.routes"));

// app.get("/", (req, res) => {
//   res.json({ test: "message!" });
// });
// app.post("/", (req, res) => {
//   res.json({ test: "post!" });
// });

app.use("/", express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

async function start() {
  try {
    // connect to mongoose DB
    mongoose.connect(
      "mongodb+srv://cb8593bc:Racing-Bike-2000@cluster0.kmhay.gcp.mongodb.net/wedding-pictures?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("connect to database");

    //start server
    server.listen(PORT, () => {
      console.log(`Server is started on port №${PORT}`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
