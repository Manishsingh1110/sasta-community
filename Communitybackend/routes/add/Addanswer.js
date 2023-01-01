const express = require('express');
const Answers = require('../../models/Answer');
const User = require('../../models/users');
const route = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../../middleware/fetch')
// create a user using /app/Addanswer/
route.post('/', [body('Answerdata', 'Enter a valid questiondata').isLength({ min: 5 })],fetchuser, async (req, res) => {
  const errors = validationResult(req);
  const userid = req.user.id
  const user=await User.findById(userid).select("-password")
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var mn = dd + '/' + mm + '/' + yyyy;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    Answer = await Answers.create({
      Answerdata: req.body.Answerdata,
      questionid: req.body.questionid,
      useransweredid: userid,
      useranswered:user.username,
      date:mn
    })
    res.json({ Answer })
  } catch (err) {
    res.json({ errors: 'please enter a valid email', message: err.message })
  }
})
module.exports = route