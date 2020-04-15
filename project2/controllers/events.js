const Post = require('../models/post');

// const index = (req, res) => {
//   res.render('events/index')
// }

function index(req, res, next) {
  // console.log(req.query)
  let modelQuery = {
    category: 'events'
  }
  Post.find(modelQuery).exec(function(err, posts) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('events/index', { 
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
//     res.redirect('/events');
//   });
// }
function addPost (req, res, next) {
  console.log(req.body);
  const post = new Post(req.body)
  post.save(function(err) {
    console.log('events page post', posts);
    res.redirect('/events');
  });
}
module.exports = {
    index,
    addPost
};