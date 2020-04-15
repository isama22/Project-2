const express = require('express');
const router = express.Router();
const techniquesCtrl = require('../controllers/techniques');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

 router.get('/', techniquesCtrl.index);
 router.post('/', isLoggedIn, techniquesCtrl.addPost);
//router.get('/artists', () => {res.send('this is the about page!')})

module.exports = router;