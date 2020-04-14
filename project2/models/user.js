const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//same file as post
// const commentSchema = new mongoose.Schema({
//         text: String,
//     },
//     { timestamps: true }
// );
// //make this a referenced schema in a different file
// const postSchema = new mongoose.Schema({
//     post: {
//     type: String,
//     comments: [commentSchema]
// },
//     category: {
//     enum: ['mainPage', 'techniques', 'events', 'artists', 'resourceLinks']
// }},
//     { timestamps: true }
// );

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    // posts: [postSchema],
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'}
    ],
    googleId: String},

    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);