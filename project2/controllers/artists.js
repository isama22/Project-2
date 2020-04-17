const Post = require('../models/post');

function index(req, res, next) {
  Post.find({
    category:'artists'
  })
    .exec(function (err, posts) {
      console.log('all posts', posts);
      if (err) return next(err);
      res.render('artists/index', {
        posts,
        user: req.user
      });
    });
}

function addPost(req, res, next) {
  req.body.category = 'artists';
  //console.log('req.body', req.body);
  const post = new Post(req.body)
  post.save(function (err, posts) {
    console.log('last added', posts);
    res.redirect('/artists');
  });
}

function delPost(req, res, next) {
  Post.deleteOne({_id:req.params.id})
  .then((err) => {
         res.redirect('/artists');
  })
}

module.exports = {
  index,
  addPost,
  delPost
};