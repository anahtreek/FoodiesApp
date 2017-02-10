'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const userModel = require('./userEntity').userModel;

router.post('/add', function(req,res){
  logger.debug("inside the add post");
  let user = new userModel({
    "userName":req.body.userName,
    "password":req.body.password
  })
  user.save().then((doc)=>{
    console.log(doc);
    res.send('user data inserted');
  },(err)=>{
    console.log(err);
    res.send('error');

});
});

// Get details of all users in the system
router.get('/', function(req, res) {
  userModel.find().then((doc)=>{
    console.log(doc);
    res.send(doc);
  },(err)=>{
    console.log(err);
    res.send('error');

  });
});

router.delete('/delete/:id', function(req,res){
  logger.debug("inside the add post");
   let id = req.params.id;
  userModel.findByIdAndRemove(id).then((doc)=>{
    res.send('user of id is deleted');
  },(err)=>{
    console.log(err);
    res.send('error');

});
});
router.patch('/update', function(req,res){

  userModel.findOneAndUpdate({ userName: 'aswini' }, { password: '123asw' }).then((doc)=>{
    res.send('user details updated');},(err)=>{
      consile.log(err);
      res.send('error');

  })
});

module.exports = router;
