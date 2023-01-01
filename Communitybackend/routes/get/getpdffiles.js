const express = require('express');
const Pdffiles = require('../../models/Pdffiles');
const route=express.Router();
// get  user notes using /app/getuseranswer/
route.post('/',async(req, res) => {
    try {
      const pdffiles=await Pdffiles.find()
      res.json(pdffiles)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route