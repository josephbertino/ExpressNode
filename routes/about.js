/* Get Express into this project */
const express = require('express');
const router = express.Router();

/* Render the /about page */
router.get('/about', (req, res) => {
    res.render('about');
});

/* Export the router handler */
module.exports = router;