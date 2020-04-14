const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');


 router.get('/', eventsCtrl.index);
//router.get('/artists', () => {res.send('this is the about page!')})

module.exports = router;