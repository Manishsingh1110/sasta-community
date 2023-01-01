const express = require('express');
const Remainders = require('../../models/Remainder');
const route=express.Router();
var fetchuser = require('../../middleware/fetch')
// get  user notes using /app/getuserremainder/
route.post('/',fetchuser,async(req, res) => {
    try {
      const user=req.user.id
      const Remainder=await Remainders.find({userid:user})
      res.json(Remainder)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route