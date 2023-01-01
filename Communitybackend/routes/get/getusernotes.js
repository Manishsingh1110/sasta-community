const express = require('express');
const Notes = require('../../models/Notes');
const route=express.Router();
var fetchuser = require('../../middleware/fetch')
// get  user notes using /app/getusernote/
route.post('/',fetchuser,async(req, res) => {
    try {
      const user=req.user.id
      const Note=await Notes.find({userid:user})
      // const Note=await Notes.find()
      res.json(Note)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route