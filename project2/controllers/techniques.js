const User = require('../models/user');

const index = (req, res) => {
  res.render('techniques/index')
}

module.exports = {
    index
};