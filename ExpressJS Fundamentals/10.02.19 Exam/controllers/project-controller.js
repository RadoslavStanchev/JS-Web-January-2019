const Team = require('../models/Team');

module.exports = {
    createProjectGet: (req, res) => {
        res.render('./projects//createProject')
    },
    createProjectPost: (req, res) => {
        let projectBody = req.body;

        if(!projectBody.projectName || !projectBody.description){
          projectBody.error = 'Please fill all fields.';
          res.render('./projects//createProject', projectBody);
          return;
        }
    
        // projectBody.date = Date.now();
        // articleBody.author= req.user._id;
    
        Project.create(projectBody)
          .then(() => {
            res.redirect('/')
          }).catch((e) => {
            console.log(e);
            articleBody.error = 'Something went wrong, please contact the admins.';
            res.render('./projects/projects-admin');
            return;
          })
    },

    projectsAdminGet: (req, res) => {
        res.render('./projects/projects-admin')
    },
    projectsAdminPost: (req, res) => {
        
    },

    projectsUserGet: (req, res) => {
        res.render('./projects/projects-user')
    },
    projectsUserPost: (req, res) => {
        
    },
}