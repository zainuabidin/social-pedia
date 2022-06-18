const router = require('express').Router();

router.get("/",(req,res)=>{
res.send("this is userpage")
})

module.exports = router
