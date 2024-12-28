const express = require("express");
const uploadRouter = express.Router();

const { upload } = require("../helpers/filehelper");

uploadRouter.post("/", upload.single("file"), (req, res) => {
  res.send(`/photoimgs/${req.file.filename}`);
});

uploadRouter.post("/multipesfiles", upload.array("files"), async (req, res) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: "/" + element.path.replace(/\\/g, "/"),
        fileType: element.mimetype,
      };
      filesArray.push(file);
    });

    res.status(201).send({ imgs: filesArray, msg: "Uploaded Successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = uploadRouter;
