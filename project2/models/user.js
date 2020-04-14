const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
        text: String,
    },
    { timestamps: true }
);

const postSchema = new mongoose.Schema({
    post: {
    type: String,
    comments: [commentSchema]
},
    category: {
    enum: ['mainPage', 'techniques', 'events', 'artists', 'resourceLinks']
}},
    { timestamps: true }
);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    posts: [postSchema],
    googleId: String,
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);