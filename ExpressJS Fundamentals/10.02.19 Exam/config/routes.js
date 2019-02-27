const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register',restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register',restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout',restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login',restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login',restrictedPages.isAnonymous, controllers.user.loginPost);
    app.get('/profile',restrictedPages.isAuthed, controllers.user.profileGet)


    //Teams
    app.get('/createTeam',restrictedPages.isAuthed, controllers.team.createTeamGet)
    app.post('/createTeam',restrictedPages.isAuthed, controllers.team.createTeamPost)
    app.get('/teams-admin',restrictedPages.hasRole('Admin'), controllers.team.teamsAdminGet)
    app.post('/teams-admin',restrictedPages.hasRole('Admin'), controllers.team.teamsAdminPost)
    app.get('/teams-user',restrictedPages.isAuthed, controllers.team.teamsUserGet)
    app.get('/teams-user',restrictedPages.isAuthed, controllers.team.teamsUserPost)

    //Projects

    app.get('/createProject',restrictedPages.isAuthed, controllers.project.createProjectGet)
    app.post('/createProject',restrictedPages.isAuthed, controllers.project.createProjectPost)
    app.get('/projects-admin',restrictedPages.hasRole('Admin'), controllers.project.projectsAdminGet)
    app.post('/projects-admin',restrictedPages.hasRole('Admin'), controllers.project.projectsAdminPost)
    app.get('/projects-user',restrictedPages.isAuthed, controllers.project.projectsUserGet)
    app.post('/projects-user',restrictedPages.isAuthed, controllers.project.projectsUserGet)
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};