const express = require('express');
const Questions = require('../../models/Questions');
const route=express.Router();
var fetchuser = require('../../middleware/fetch')
// get  user notes using /app/getuserquestion/
route.post('/',fetchuser,async(req, res) => {
    try {
      const user=req.user.id
      const Question=await Questions.find({Userpostedid:user})
      res.json(Question)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route