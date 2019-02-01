const mongoose=require('mongoose')
mongoose.Promise=global.Promise
const connectionString='mongodb://localhost:27017/mongoplayground'
// const connectionString='mongodb://localhost:27017/mongoplayground v2'

require('../models/ImageSchema')
require('../models/TagSchema')

module.exports=mongoose.connect(connectionString)