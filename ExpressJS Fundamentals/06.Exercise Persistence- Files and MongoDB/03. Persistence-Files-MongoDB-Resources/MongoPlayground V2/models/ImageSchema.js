const mongoose=require('mongoose')

const imageSchema=new mongoose.Schema({
    url:{type:String,required:true},
    creationDate:{type:Date,default:Date.now},
    description:{type:String},
    tags:[mongoose.SchemaTypes.ObjectId]
})

module.exports= mongoose.model('Image',imageSchema)