const express = require('express');
const Questions = require('../../models/Questions');
const route=express.Router();
// get  user notes using /app/getuserquestion/
route.post('/',async(req, res) => {
    try {
      const Question=await Questions.find()
      res.json(Question)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route