const express = require('express');
const Review = require('../../models/Review');
const route = express.Router();
// create a user using /app/Addnotes/
route.post('/', async (req, res) => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var mn = dd + '/' + mm + '/' + yyyy;
  try {
    review = await Review.create({
      Name: req.body.Name,
      Comments: req.body.comments,
      date:mn
    })
    res.json({review})
  } catch (err) {
    res.json({ errors: 'please enter a valid email', message: err.message })
  }
})
module.exports = route