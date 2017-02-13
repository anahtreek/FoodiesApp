'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const Restaurant = require('./restaurantsEntity');
const userCtrl = require('./restaurantsController');

router.post('/add', userCtrl.post);
router.get('/view', userCtrl.Get);
router.delete('/delete/:id', userCtrl.delete);
router.patch('/update/:id', userCtrl.update);

module.exports = router;
