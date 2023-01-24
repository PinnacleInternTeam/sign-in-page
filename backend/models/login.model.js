const { Schema, default: mongoose } = require("mongoose");

const loginSchema = new Schema(
    {
        
        email : {type : String,required :true},
        phone : {type : Number,required : true},
        password : {type : String,required : true}
    }
);
const login = mongoose.model('log',loginSchema);
module.exports = login;