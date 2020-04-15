const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

 router.get('/', eventsCtrl.index);
 router.post('/', isLoggedIn, eventsCtrl.addPost);
//router.get('/artists', () => {res.send('this is the about page!')})

module.exports = router;