const User = require('../models/user');

const index = (req, res) => {
  res.render('events/index')
}

module.exports = {
    index
};