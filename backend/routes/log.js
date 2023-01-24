const router = require('express').Router();
let login = require('../models/login.model');



router.route('/').get((req,res)=>{
    login.find()
    .then(user =>res.json(user))
    .catch(err =>res.status(400).json('error :'+err));
})

router.route('/add').post((req,res)=>{
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

    const new_login = new login({
    
        email,
        phone,
        password
    });
  new_login.save()
  .then(()=>res.json("logged successfully"))
  .catch(err=>res.status(400).json('error in logging :'+err));
    
});
module.exports = router;