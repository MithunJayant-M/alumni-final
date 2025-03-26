const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    title: {
        type: String},
    content: {
        type: String},
    tags: {
        type: [String],default: [],
    },
    isPinned: {
        type: Boolean,
        default: false},
    // userId: {
    //     type:String,required:true},    
    createdOn: {
        type: Date,
        default: new Date().getTime()},    
});
let blogModel  = mongoose.model('Blog', noteSchema);
module.exports = blogModel;