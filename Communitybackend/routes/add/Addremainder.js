const express = require('express');
const Remainders = require('../../models/Remainder');
const route = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../../middleware/fetch')
// create a user using /app/Addremainder/
route.post('/', [body('title', 'Enter a valid title').isLength({ min: 5 }), body('description', 'Enter a valid description').isLength({ min: 5 })], fetchuser, async (req, res) => {
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
    Remainder = await Remainders.create({
      title: req.body.title,
      description: req.body.description,
      tag: req.body.tag,
      till:req.body.till,
      userid: userid,
      date:mn
    })
    res.json({ Remainder })
  } catch (err) {
    res.json({ errors: 'please enter a valid email', message: err.message })
  }
})
module.exports = route