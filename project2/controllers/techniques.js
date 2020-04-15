const Post = require('../models/post');

// const index = (req, res) => {
//   res.render('techniques/index')
// }
function index(req, res, next) {
  // console.log(req.query)
  let modelQuery = {
    category: 'techniques'
  }
  Post.find(modelQuery).exec(function(err, posts) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('techniques/index', { 
      posts, 
      post: req.post,
      user: req.user
       });
  });
}

// function addPost(req, res, next) {
//   req.user.posts.push(req.body);
//   // console.log('!!!!', posts);
//   req.user.save(function(err) {
//     res.redirect('/techniques');
//   });
// }

function addPost(req, res, next) {
  console.log(req.user);
  const post = new Post
  post.save(function(err) {
    console.log('techniques page post', posts);
    res.redirect('/techniques');
  })
}

module.exports = {
    index,
    addPost
};