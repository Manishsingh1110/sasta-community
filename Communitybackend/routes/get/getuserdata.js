const express = require('express');
const User = require('../../models/users');
const route=express.Router();
// const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodboy';
var fetchuser = require('../../middleware/fetch')

route.post('/',fetchuser,async(req, res) => {
    try {
      const userid=req.user.id
      const user=await User.findById(userid).select("-password")
      res.json(user)
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route