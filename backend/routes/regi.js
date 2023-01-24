const router = require('express').Router();
let register = require('../models/register.model');



router.route('/').get((req,res)=>{
    register.find()
    .then(user =>res.json(user))
    .catch(err =>res.status(400).json('error :'+err));
})

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const date = req.body.date;
    const password = req.body.password;

    const new_register = new register({
        username,
        email,
        phone,
        date,
        password
    });
  new_register.save()
  .then(()=>res.json("registerd successfully"))
  .catch(err=>res.status(400).json('error in inserting :'+err));  
});

router.route('/:id').delete((req,res)=>{
    register.findByIdAndDelete(req.params.id)
    .then(()=>res.json('deleted'))
    .catch(err=>res.status(400).json('error'+err));
});

router.route('/update/:id').post((req,res)=>{
    register.findById(req.params.id)
    .then(ex_update =>{
        ex_update.username = req.body.username;
        ex_update.email = req.body.email;
        ex_update.phone = req.body.phone;
        ex_update.date = req.body.date;
        ex_update.password = req.body.password;

        ex_update.save()
        .then(()=>res.json('edited'))
        .catch(err =>res.status(400).json('error'+err))
    })
    .catch(err=>res.status(400).json('error'+err));
});
module.exports = router;