const Post = require('../models/post');

// const index = (req, res) => {
//   res.render('resourceLinks/index')

// }
function index(req, res, next) {
  // console.log(req.query)
  let modelQuery = {
    category: 'resourceLinks'
  }
  Post.find(modelQuery).exec(function(err, posts) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('resourceLinks/index', { 
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
//     res.redirect('/resourceLinks');
//   });
// }

function addPost(req, res, next) {
  console.log(req.user);
  const post = new Post(req.body)
  post.save(function(err) {
    console.log('resourceLinks page post', posts);
    res.redirect('/resourceLinks');
  });
}



module.exports = {
    index,
    addPost
};