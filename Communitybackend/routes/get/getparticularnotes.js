const express = require('express');
const Notes = require('../../models/Notes');
const route=express.Router();
// get  user notes using /app/getusernote/
route.post('/',async(req, res) => {
    try {
      const Note=await Notes.find({userid:req.body.id})
      res.json(Note)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route