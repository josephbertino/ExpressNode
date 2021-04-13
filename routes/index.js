const express = require('express');
const router = express.Router();

const data = require('../data.json');

/* Root route redirects to route '/index' */
router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

module.exports = router;