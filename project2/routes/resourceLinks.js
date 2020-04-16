const express = require('express');
const router = express.Router();
const resourceLinksCtrl = require('../controllers/resourceLinks');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

router.get('/', resourceLinksCtrl.index);
router.post('/', isLoggedIn, resourceLinksCtrl.addPost);

router.delete('/posts/:id', resourceLinksCtrl.delPost);

//router.put('/:id', resourceLinksCtrl.update);

module.exports = router;