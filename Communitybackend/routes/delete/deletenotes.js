const express = require('express');
const Notes = require('../../models/Notes');
const route = express.Router();
var fetchuser = require('../../middleware/fetch')
// create a user using /app/Addnotes/
route.delete('/note/:id',fetchuser, async (req, res) => {
  const userid = req.user.id
  try {
    let notee=Notes.findById(req.params.id);
    // console.log(remainde)
    if(!notee){
      return res.status(400).json({ errors: errors.array() });
    }
    // if(remainde.userid!== userid){
    //   return res.status(400).send("not allowed");
    // }
    notee= await Notes.findByIdAndDelete(req.params.id)
    res.json({"success":"your raminder is deleted",notes:notee})
  } catch (err) {
    res.json({ errors: 'please enter a valid email', message: err.message })
  }
})
module.exports = route