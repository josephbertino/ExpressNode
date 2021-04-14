/* Get Express into this project */
const express = require('express');
const router = express.Router();

/* Import project data */
const { projects } = require('../data.json');

/* Render the 'index' page */
router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index');
});

/* Export the router handler */
module.exports = router;
