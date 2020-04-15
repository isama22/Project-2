const Post = require('../models/post');
//do i need to require /models/user or models/post ?

// const index = (req, res) => {
//   res.render('artists/index')
// }

function index(req, res, next) {
  // console.log(req.query)
  // let modelQuery = 
  // // {category: 'artists'}
  // req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // let sortKey = req.query.sort || 'name';
  
  Post.find()
  // .sort(sortKey)
  .exec(function(err, posts) {
    console.log(posts);
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('artists/index', { 
      posts,
      user: req.user
      });
  });
}

function addPost(req, res, next) {
  req.body.category = 'artists';
  console.log('req.body', req.body);
  const post = new Post(req.body)
  post.save(function(err, posts) {
    console.log('artists page post', post);
    res.redirect('/artists');
  });
}

module.exports = {
    index,
    addPost
};