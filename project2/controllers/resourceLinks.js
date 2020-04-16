const Post = require('../models/post');

// const index = (req, res) => {
//   res.render('resourceLinks/index')

// }
function index(req, res, next) {
  Post.find({
    category:'resourceLinks'
  })
  .exec(function (err, posts) {
    if (err) return next(err);
    res.render('resourceLinks/index', {
      posts,
      user: req.user
    });
  });
}

function addPost(req, res, next) {
  req.body.category = 'resourceLinks';
  const post = new Post(req.body)
  post.save(function (err, posts) {
    console.log('!!!! last added post', posts);
    res.redirect('/resourceLinks');
  });
}



module.exports = {
    index,
    addPost
};