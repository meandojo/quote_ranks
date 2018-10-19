const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/quote_ranks",{useNewUrlParser:true}, (errs)=>errs?console.log(errs):console.log('db connected and doing great work and stuff'))

QuoteSchema = new mongoose.Schema({
    quote:{
        required:true,
        type:String,
        minlength:3
    },
    votes:{
        default:0,
        type:Number,
    }
}, {timestamps:true})


AuthorSchema = new mongoose.Schema({
    name:{
        required: true,
        type:String,
        minlength:3
    },
    quotes:[QuoteSchema]
}, {timestamps:true})

module.exports = mongoose.model('Author', AuthorSchema)