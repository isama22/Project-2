const express = require('express');
const router = express.Router();
const techniquesCtrl = require('../controllers/techniques');


 router.get('/', techniquesCtrl.index);
//router.get('/artists', () => {res.send('this is the about page!')})

module.exports = router;