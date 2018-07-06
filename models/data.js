var mongoose = require('mongoose');
var schemas = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
        },
    gst: {
        type: Number, 
        required: true
    },
    totalamount: {
        type: Number, 
        required: true
    },
    tstamp: Date
});

//mongoose.model('data', schemas);
var Data = mongoose.model('Data', schemas);
module.exports = Data;