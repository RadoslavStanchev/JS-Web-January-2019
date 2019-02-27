const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    projectName: { type: Schema.Types.String, required: true, unique: true},
    description: { type: Schema.Types.String, required: true, maxlength: 50 },

})