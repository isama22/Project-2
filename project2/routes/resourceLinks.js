const express = require('express');
const router = express.Router();
const resourceLinksCtrl = require('../controllers/resourceLinks');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

router.get('/', resourceLinksCtrl.index);
router.post('/', isLoggedIn, resourceLinksCtrl.addPost);
// router.get('/users/:id/resourceLinks', resourceLinksCtrl.index);

// router.get('/resourceLinks', () => {res.send('this is the links page!')})

module.exports = router;