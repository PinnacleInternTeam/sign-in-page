const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
//swrryfjgh
const app = express();
require('dotenv').config();
const port = process.env.PORT ||2020;

app.use(cors());
app.use(express.json());

const uri = process.env.DataBase_URL;


mongoose.connect(uri,{
    useNewUrlParser:true
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("database connected successfully")
})


const register = require('./routes/regi');
const login = require('./routes/log');

app.use('/regi',register);
app.use('/log',login);


app.listen(port,()=>{
    console.log(`server running : ${port}`);
});
