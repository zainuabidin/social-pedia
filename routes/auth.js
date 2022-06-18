const router = require("express").Router();
const User = require("../models/User");
//const bcrypt = require("bcrypt");

//signup
router.post("/register", async (req, res) => {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.username,
    
  })
  try{
    const user = await newUser.save();
    res.status(200).json(user);
  }
  catch(err){
  console.log(err)
  }
});

module.exports = router;

