const { Schema, default: mongoose } = require("mongoose");

const registerSchema = new Schema(
    {
        username :{type : String,required : true},
        email : {type : String,required :true},
        phone : {type : Number,required : true},
        date : {type : String,required : true},
        password : {type : String,required : true}
    }
);
const register = mongoose.model('reg',registerSchema);
module.exports = register;