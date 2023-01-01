const express = require('express');
const Review = require('../../models/Review');
const route=express.Router();
// get  user notes using /app/getuserquestion/
route.post('/',async(req, res) => {
    try {
      const review=await Review.find()
      res.json(review)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route