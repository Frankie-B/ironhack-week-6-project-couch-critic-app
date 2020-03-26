const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
firstName: String,
lastName: String,
});

const Friend = mongoose.model('friends', friendSchema);

module.exports = Friend;
