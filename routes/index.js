/* Get Express into this project */
const express = require('express');
const router = express.Router();

/* Import project data */
const data = require('../data.json');

/* Render the 'index' page */
router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

/* Export the router handler */
module.exports = router;