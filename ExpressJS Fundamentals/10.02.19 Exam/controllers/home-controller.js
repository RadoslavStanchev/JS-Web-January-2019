const Team = require('../models/Team');
const Project = require('../models/Project');
module.exports = {
    index: (req, res) => {
        res.render('home/index');
    },

    search: (req, res) => {
        const projectName = req.query.projectName.toLowerCase();
        const teamName = req.query.teamName.toLowerCase();
        Project.find({})
            .then((projects) => {
                const filteredProjects = projects.filter(a => a.projectName.toLowerCase().includes(projectName))
                res.render('projects/projects-user', { result: projectName, projects: filteredProjects })
            })

        Team.find({})
            .then((teams) => {
                const filteredTeams = teams.filter(a => a.teamName.toLowerCase().includes(teamName))
                res.render('teams/teams-user', { result: teamName, teams: filteredTeams })
            })
    }
}

       
