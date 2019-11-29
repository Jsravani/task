
const mongoose = require('mongoose');
const collection = "tenants";

const pgschema = mongoose.Schema({
    name : String,
    address : String,
    pan : String,
    aadhar : Number,
    mobile : Number
})

module.exports = mongoose.model(collection,pgschema);







































