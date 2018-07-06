var express = require('express');
var mongoose = require('mongoose');
var axios = require('axios');
var bodyParser = require('body-parser');
var Data = require('./models/data');
var app = express();
mongoose.connect('mongodb://localhost/mydb');

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//REST API
app.post('/api/additems', async(req, res)=>{
    const {name, amount, gst} = req.body;
    const exp = `${amount}(100%2B${gst})%2F100`;
    const tp=await axios.get(`http://api.mathjs.org/v4/?expr=${exp}`);
    var dt={
        name:name,
        amount:amount,
        gst:gst,
        totalamount:tp.data,
        tstamp:Date.now()
    }
    Data.create(dt,function(err,res){
        console.log("Item Added");
    })
    console.log(name+" "+amount+" "+gst);
});

app.get('/',async(req,res)=>{
    res.send("Hello TrustChecker");
});

app.get('/api/additems',async(req,res)=>{
    const data = await Data.find({});
    return res.status(200).send(data);
    
});

app.listen(7676);