const express = require('express');
const Answers = require('../../models/Answer');
const route=express.Router();
var fetchuser = require('../../middleware/fetch')
// get  user notes using /app/getuseranswer/
route.post('/',fetchuser,async(req, res) => {
    try {
      const userid=req.user.id
      const Answer=await Answers.find()
      res.json(Answer)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route