// const mongoose = require('mongoose');
const User = require('../models/user');

function index(req, res) {
    res.render('users/index'
    // , {
    //     users,
    //     user: req.user,
    //     name: req.query.name,
    // }
    )
}


module.exports = {
    index,
}

