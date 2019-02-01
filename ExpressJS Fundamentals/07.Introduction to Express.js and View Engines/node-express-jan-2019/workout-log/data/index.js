const mongoose = require('mongoose');

module.exports = function initData() {
    mongoose.connect('mongodb://admin:polina23@ds213645.mlab.com:13645/expressjs-course');
};

