const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
/* GET users listing. */
router.get('/', postsCtrl.index);
//i dont have any show or new pages for users or the other pages so i dont nned any other userCtrl routes?

router.post('/', isLoggedIn, postsCtrl.addPost);

module.exports = router;
