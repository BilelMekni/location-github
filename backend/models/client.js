const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    date : Date,
    email : { type: String, unique: true },
    password : String,
    confPassword : String,
    phone : String,
    telephone : String,
    adresse : String,
    gender : String,
    avatar : String,
    role : String,

})
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
//Model name user en PascalCase
const client = mongoose.model("Client",userSchema);
module.exports = client;