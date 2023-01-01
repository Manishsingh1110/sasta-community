const express = require('express');
const Questions = require('../../models/Questions');
const route = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../../middleware/fetch')
// create a user using /app/addquestion/
route.post('/', [body('questiondata', 'Enter a valid questiondata').isLength({ min: 5 })], fetchuser, async (req, res) => {
  const errors = validationResult(req);
  const userid = req.user.id
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var mn = dd + '/' + mm + '/' + yyyy;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    Question = await Questions.create({
      questiondata: req.body.questiondata,
      Userpostedid: userid,
      date:mn
    })
    res.json({ Question })
  } catch (err) {
    res.json({ errors: 'please enter a valid email', message: err.message })
  }
})
module.exports = route