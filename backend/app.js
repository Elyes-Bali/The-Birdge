console.clear();
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");

const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/photoimgs", express.static(path.join(__dirname, "photoimgs")));
app.use("/api/courses", require("./routes/Courses"));
app.use("/api/courses/upload", require("./routes/PhotoImgsUpload"));

// Run server
app.listen(port, () => {
  console.log("Server is Listening");
});
