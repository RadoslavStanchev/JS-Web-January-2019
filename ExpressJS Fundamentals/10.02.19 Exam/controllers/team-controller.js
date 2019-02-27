const Team = require('../models/Team');


module.exports = {
    createTeamGet: (req,res) => {
        res.render('./teams/createTeam')
    },
    createTeamPost: (req, res) => {
        const teamName = req.body;

        if(teamName === 0) {
            'Please fill all fields.'
        }
        Team.create(teamName)
            .then(() => {
                res.redirect('./teams/teams-admin')
            }).catch((e) => {
                console.log(e);
                res.render('./teams/createTeam');
                return;
              })
    },

    teamsAdminGet: (req,res) => {
        res.render('./teams/teams-admin')
    },
    teamsAdminPost: (req, res) => {
        
    },

    teamsUserGet: (req,res) => {
        res.render('./teams/teams-user')
    },
    teamsUserPost: (req, res) => {
        
    },
}