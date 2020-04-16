const Post = require('../models/post');

// const index = (req, res) => {
//   res.render('resourceLinks/index')
// }
function index(req, res, next) {
  Post.find({
    category:'resourceLinks'
  })
  .exec(function (err, posts) {
    //console.log('all!!!!!!', posts);
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

//fix!
function delPost(req, res, next) {
  Post.findByIdAndRemove(req.params.id), function(err, posts) {
    console.log('!!!!!!removed', posts);
      res.redirect('/resourceLinks');
  };
}

// function delPost(req, res) {
//   Post.deleteOne(req.params.id);
//   res.redirect('/resourceLinks')
// };

// function delPost(req, res, next) {
//   User.findOne({'posts._id': req.params.id}, function(err, posts) {
//     user.posts.id(req.params.id).remove();
//     user.save(function(err) {
//       res.redirect('/resourceLinks');
//     });
//   });
// }

//function updatePost()

module.exports = {
    index,
    addPost,
    delPost,
    //updatePost
};