const User = require('../models/user');

const index = (req, res) => {
  res.render('artists/index')
}

module.exports = {
    index
};