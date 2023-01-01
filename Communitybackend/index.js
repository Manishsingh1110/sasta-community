const express = require('express')
const db = require('./db.js')
const Pdffiles = require('./models/Pdffiles');
db();
const app = express()
const port = 3001
var cors = require('cors')
app.use(cors())
app.use(express.json())
const fileUpload = require("express-fileupload");
const path = require("path");
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use("/uploadeddata", express.static(path.join(__dirname, 'uploadeddata')));
app.use(
  fileUpload({createParentPath: true})
);
var fetchuser = require('./middleware/fetch')
app.post("/upload",fetchuser, (req, res) => {
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }
  const id=req.header('id');
  const Userid = req.user.id
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var mn = dd + '/' + mm + '/' + yyyy;
  const file = req.files.myFile;
  const path = __dirname + "/uploadeddata//"+ Userid+"/" + file.name;
  const Filename = file.name 
  file.mv(path, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  Pdffile = await Pdffiles.create({
    filename: Filename,
    noteid: id,
    userid: Userid,
    filedirectory: path,
    date: mn
  })
    return res.send({ status: "success", path: path });
  });
});
// url routes
app.use('/app/addnote',require('./routes/add/Addnotes'))
app.use('/app/review',require('./routes/add/Addreview'))
app.use('/app/addanswer',require('./routes/add/Addanswer'))
app.use('/app/addquestion',require('./routes/add/Addquestion'))
app.use('/app/addremainder',require('./routes/add/Addremainder'))

app.use('/app/delete',require('./routes/delete/deletenotes'))
app.use('/app/delete/question/:id',require('./routes/delete/deletequestion'))
app.use('/app/delete',require('./routes/delete/deleteremainder'))


app.use('/app/signup',require('./routes/signup'))
app.use('/app/getuserdata',require('./routes/get/getuserdata'))
app.use('/app/getanyuser',require('./routes/get/getanyuser'))
app.use('/app/login',require('./routes/login'))
// app.use('/app/review',require('./routes/get/userreview'))
app.use('/app/getreview',require('./routes/get/getreviews'))


app.use('/app/getusernote',require('./routes/get/getusernotes'))
app.use('/app/getallnote',require('./routes/get/getallnotes'))
app.use('/app/getpdffiles',require('./routes/get/getpdffiles'))
app.use('/app/getparticularnote',require('./routes/get/getparticularnotes'))
app.use('/app/getuseranswer',require('./routes/get/getuseranswer'))
app.use('/app/getuserquestion',require('./routes/get/getuserquestions'))
app.use('/app/getparticularquestion',require('./routes/get/getparticularquestions'))
app.use('/app/getuserremainder',require('./routes/get/getuserremainders'))

app.use('/app/getallanswer/',require('./routes/get/getallanswer'))
app.use('/app/getallquestion/',require('./routes/get/getallquestions'))

app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening on port ${port}`)
})