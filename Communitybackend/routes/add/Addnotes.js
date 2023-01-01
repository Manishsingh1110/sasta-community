const express = require('express');
const Notes = require('../../models/Notes');
const route = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../../middleware/fetch')
// create a user using /app/Addnotes/
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
    Note = await Notes.create({
      title: req.body.title,
      description: req.body.description,
      tag: req.body.tag,
      userid: userid,
      date:mn
    })
    res.json({Note})
  } catch (err) {
    res.json({ errors: 'please enter a valid email', message: err.message })
  }
})
module.exports = route