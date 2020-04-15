const Post = require('../models/post');
//do i need to require /models/user or models/post ?

// const index = (req, res) => {
//   res.render('artists/index')
// }

function index(req, res, next) {
  // console.log(req.query)
  let modelQuery = {
    category: 'artists'
  }
  Post.find(modelQuery).exec(function(err, posts) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('artists/index', { 
      posts, 
      post: req.post,
      user: req.user
       });
  });
}

function addPost(req, res, next) {
  console.log(req.user);
  const post = new Post(req.body)
  post.save(function(err) {
    console.log('!!!!', post);
    res.redirect('/artists');
  });
}

module.exports = {
    index,
    addPost
};