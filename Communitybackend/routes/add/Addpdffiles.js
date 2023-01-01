const express = require('express');
const Pdffiles = require('../../models/Pdffiles');
const fileUpload = require("express-fileupload");
const path = require("path");
const route = express.Router();
route.use("/uploadeddata", express.static(path.join(__dirname, 'uploadeddata')));
route.use(
  fileUpload({ createParentPath: true })
);
var fetchuser = require('../../middleware/fetch')
// create a user using /app/Addnotes/
route.post('/', fetchuser, async (req, res) => {
  const Userid = req.user.id
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var mn = dd + '/' + mm + '/' + yyyy;
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }
  console.log(req.body)
  const file = req.body.files.myFile;
  const path = __dirname + "/uploadeddata/" + file.name;
  
  const Filename = file.name 
  console.log(extension)
  // Pdffile = await Pdffiles.create({
  //   filename: Filename,
  //   noteid: "8888888",
  //   userid: Userid,
  //   filedirectory: path,
  //   date: mn
  // })
  file.mv(path, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send({ status: "success", path: path });
  });
})
module.exports = route