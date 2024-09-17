const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
    name : String,
    matricule : String,
    color : String,
    pays : String,
    price : String,
    guarantee : String,
    date : Date,
    avatar : String,
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"client"// Model name
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"client" // Model name
    },

})
//Model name user en PascalCase
const car = mongoose.model("Cars",carSchema);
module.exports = car;