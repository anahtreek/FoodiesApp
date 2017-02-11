'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require( 'mongoose' );
const Restaurant = require('./restaurantsEntity');
const userCtrl = require('./restaurantsController');

// router.post('/add', function(req, res) {
//     // logger.debug("Inside user post");
//     var restaurant = new Restaurant(req.body);

//     restaurant.save().then((doc)=>{
//     console.log("insertion sucessfull", doc);
//     res.send("insertion sucessfull");
//     },(err)=>{
//         console.log("failure",err);
//         res.send("failure");
//     });

// });

router . post('/add', userCtrl.post);
router . get('/view', userCtrl.Get);
router. delete('/delete/:id',userCtrl.delete);
router.put('/update/:id', userCtrl.update);



// router.delete('/delete', function(req, res){
//     // var nuser = new User(req.body);
//     var res_id = req.body._id;

//     if(isNaN(res_id) || res_id == "")
//     {
//         res.send("enter valid ID")
//     }
//     else{

//         Restaurant.findById(req.body._id, function (err, restaurants) {
//         if (err) {
//             return console.error(err);
//         } else {
//             //remove it from Mongo
//             restaurants.remove(function (err, restaurants) {
//                 if (err) {
//                     return console.error(err);
//                 } else {
//                     res.send("Deleted Successfully");
//        }
//    })
//         }
//     })

//     }
//  });
// router.put('/update/:id', function(req,res){

//    Restaurant.findById(req.params.id, function(err, restaurants) {
//    if (err){
//      throw console.err(err);
//    }
//    restaurants.comments = req.body.comments;
//    restaurants.save(function(err) {
//    if (err) {
//        throw console.err(err);
//    } else
//    {
//        res.send('User successfully updated!');
//    }
//  });
// });
// })
module.exports = router;
