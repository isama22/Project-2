const User = require('../models/user');

const index = (req, res) => {
  res.render('resourceLinks/index')

}

module.exports = {
    index
};