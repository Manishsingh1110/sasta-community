const express = require('express');
const User = require('../../models/users');
const route=express.Router();
route.post('/',async(req, res) => {
    try {
      const userid=req.body.userid
      try {
        var user=await User.find({_id:userid}).select("-password")
      } catch (error) {
        console.log(error)
      }
       try {
        var user2 =await User.find({username : userid}).select("-password")
       } catch (error) {
        console.log(error)
       }
      if(user){
        res.json(user)
      }
      else if(user2){
        res.json(user2)
      }
      
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route