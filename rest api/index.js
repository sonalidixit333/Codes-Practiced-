const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var url = "mongodb+srv://root:root@cluster0.rwurr.mongodb.net/practice_lib?retryWrites=true&w=majority";

mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true})
.then(() => console.log("connection successfull!!"))
.catch(() => console.log("connection"));


app.get('/',(req,res)=>{
    res.send('We are on home')
})




app.listen(3000);