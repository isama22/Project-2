const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');


 router.get('/', artistsCtrl.index);
//router.get('/artists', () => {res.send('this is the about page!')})

module.exports = router;