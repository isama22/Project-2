const Post = require('../models/post');

function index(req, res, next) {
  Post.find({
    category:'posts'
  })
    .exec(function (err, posts) {
      //console.log('!!!!! all posts', posts);
      if (err) return next(err);
      res.render('posts/index', {
        posts,
        user: req.user
      });
    });
}

function addPost(req, res, next) {
  req.body.category = 'posts';
  //console.log('req.body', req.body);
  const post = new Post(req.body)
  post.save(function (err, posts) {
    //console.log('!!!! last added post', posts);
    res.redirect('/posts');
  });
}


//add method ovverride middleware to get delete to work
// function delPost(req, res, next) {
//   User.findOne({ 'posts._id': req.params.id }, function (err, post) {
//     user.post.id(req.params.id).remove();
//     user.save(function (err) {
//       res.redirect('/posts');
//     });
//   });
// }



module.exports = {
  index,
  addPost,
  //delPost
}