const express = require('express');
const Remainders = require('../../models/Remainder');
const route = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../../middleware/fetch')
// create a user using /app/Addremainder/
route.delete('/remainder/:id',fetchuser, async (req, res) => {
  const userid = req.user.id
  console.log(req.params.id)
  try {
    let remainde=Remainders.findById(req.params.id);
    // console.log(remainde)
    if(!remainde){
      return res.status(400).json({ errors: errors.array() });
    }
    // if(remainde.userid!== userid){
    //   return res.status(400).send("not allowed");
    // }
    remainde= await Remainders.findByIdAndDelete(req.params.id)
    res.json({"success":"your raminder is deleted",remainders:remainde})
  } catch (err) {
    res.json({ errors: 'please enter a valid email', message: err.message })
  }
})
module.exports = route