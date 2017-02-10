'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');

router.post('/add', function(req, res) {
    logger.debug("Adding to fav");
    let name = req.body.name;
    let id = req.body.id;
    if(typeof id === 'number')
    res.send('Hello '+name+' your id is '+id);
});

router.delete('/delete', function(req, res) {
    logger.debug("Delete from fav");
    let name = req.body.name;
    let id = req.body.id;
    if(typeof id === 'number')
    res.send(name+' is deleted');
});

router.put('/update', function(req, res) {
    logger.debug("Update comment");
    let comment = req.body.comment;
    if(!comment)
    	res.send('Enter Comments')
    else
    	res.send(comment);
});

// Get details of all user in the system
router.get('/', function(req, res) {
  logger.debug('Inside get');
  res.send('response from user GET route check');
});

module.exports = router;
