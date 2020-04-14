const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
router.get('/', artistsCtrl.index);
//router.get('/artists', () => {res.send('this is the about page!')})
router.post('/', isLoggedIn, artistsCtrl.addPost);
module.exports = router;