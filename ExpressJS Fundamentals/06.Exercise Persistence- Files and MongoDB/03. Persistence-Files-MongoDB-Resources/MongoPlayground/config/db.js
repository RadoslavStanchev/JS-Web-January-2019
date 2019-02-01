const mongoose = require('mongoose');
mongoose.Promise=global.Promise
const connectionString = 'mongodb://localhost:27017/MongoPlayground';

// module.exports = () => {
//  //TODO:
// }
require('../models/ImageSchema')
require('../models/TagSchema')

module.exports = mongoose.connect(connectionString);