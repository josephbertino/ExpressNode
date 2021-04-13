const express = require('express');
const router = express.Router();

const data = require('../data.json');

/* Redirect to '/' if the route is simply '/projects' */
router.get('/projects', (req, res) => {
    return res.redirect('/');
})

/* Dynamically render the /projects routes */
router.get('/projects/:id', (req, res, next) => {
    const id = +req.params.id;
    
    // Only render project route if the project id is valid
    if (Number.isInteger(id) && id < data.projects.length && id > -1) {
        const project = data.projects[req.params.id];
        return res.render('project', { project });
    }
    // Otherwise throw a 404 error
    else {
        const err = new Error(`Page /projects/${id} does not exist`);
        err.status = 404;
        next(err);
    }
});

module.exports = router;