/* Get Express into this project */
const express = require('express');
const router = express.Router();

/* Import project data */
const { projects } = require('../data.json');

/* Redirect '/projects' to '/' */
router.get('/projects', (req, res) => {
    return res.redirect('/');
})

/* Dynamically render the /projects routes based on project id */
router.get('/projects/:id', (req, res, next) => {
    const id = +req.params.id;
    // Only render project route if the project id is valid
    if (projects[id]) {
        const project = projects[id];
        return res.render('project', { project });
    }
    // Otherwise throw a 404 error to the Global Error Handling middleware
    else {
        const err = new Error(`Page /projects/${req.params.id} does not exist`);
        err.status = 404;
        next(err);
    }
});

module.exports = router;
