const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    username:String,
    picture:String,
    googleProviderId: String,
    name: String,
    createdAt: {type:Date, default: Date.now},
    lastLogin: {type:Date, default: Date.now}
})

mongoose.model("users",userSchema);
