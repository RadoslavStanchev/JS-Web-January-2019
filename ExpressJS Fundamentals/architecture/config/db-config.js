const mongoose = require('mongoose');

function initDb(str) {
    mongoose.connect(str)
}

module.exports = initDb;