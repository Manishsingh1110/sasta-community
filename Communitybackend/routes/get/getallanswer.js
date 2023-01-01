const express = require('express');
const Answers = require('../../models/Answer');
const route=express.Router();
// get  user notes using /app/getuseranswer/
route.post('/',async(req, res) => {
    try {
      const Answer=await Answers.find()
      res.json(Answer)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route