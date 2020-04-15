const Post = require('../models/post');

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Post.find(modelQuery)
    .sort(sortKey).exec(function(err, posts) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('posts/index', { 
        posts, 
        user: req.user,
        name: req.query.name, 
        sortKey });
    });
  }

  function addPost(req, res, next) {
    console.log(req.user);
    const post = new Post(req.body)
    post.save(function(err) {
      console.log('!!!!', posts);
      res.redirect('/posts');
    });
  }

//add middleware to get delete to work
  function delPost(req, res, next) {
    User.findOne({'posts._id': req.params.id}, function(err, user) {
      user.facts.id(req.params.id).remove();
      user.save(function(err) {
        res.redirect('/users');
      });
    });
  }

  module.exports = {
    index,
    addPost,
    delPost
}