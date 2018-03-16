var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/contactlist');//connect to mongodb
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb 27017');
});
mongoose.connection.on('error',(err)=>{
    if(err){
console.log('error in database'+err);
    }
});


const port = 3000;

app.use(cors()); //adding middle ware
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));//static files

app.use('/api',route);

 app.get('/',(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
console.log('server started at port: '+port);
});