const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const publicationsSchema = mongoose.Schema({
    name : String,
    email : { type: String, unique: true },
    subject : String,
    message : String,
    clientsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"client"// Model name
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"client" // Model name
    },
    status : String,
})
// Apply the uniqueValidator plugin to userSchema.
publicationsSchema.plugin(uniqueValidator);
//Model name User en PascalCase
const publications = mongoose.model("Publications",publicationsSchema);
module.exports = publications;