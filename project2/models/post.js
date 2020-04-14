const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//same file as post
const commentSchema = new mongoose.Schema({
    text: String,
},
    { timestamps: true }
);
//make this a referenced schema in a different file
const postSchema = new mongoose.Schema({
    post: {
        type: String,
        comments: [commentSchema]
    },
    category: {
        enum: ['mainPage', 'techniques', 'events', 'artists', 'resourceLinks']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'},
},
    { timestamps: true }
);
module.exports = mongoose.model('Post', postSchema);