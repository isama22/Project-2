const express = require('express');
const router = express.Router();
const resourceLinksCtrl = require('../controllers/resourceLinks');


router.get('/', resourceLinksCtrl.index);
// router.get('/users/:id/resourceLinks', resourceLinksCtrl.index);

// router.get('/resourceLinks', () => {res.send('this is the links page!')})

module.exports = router;