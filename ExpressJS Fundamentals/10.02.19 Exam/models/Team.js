const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    teamName: { type: Schema.Types.String, required: true, unique: true},
    projects: [{ type: Schema.Types.String }],
    members: [{ type: Schema.Types.ObjectId }]
})

const Team = mongoose.model('Team', teamSchema);