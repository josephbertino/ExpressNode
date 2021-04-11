const express = require('express');
const path = require('path');

const data = require('./data.json');
const createError = require('http-errors');

/* Instantiate Express app */
const app = express();

/* Set up Pug view engine */
app.set('view engine', 'pug');
app.set(express.static(path.join(__dirname, 'views')));

/* Static middleware for serving static files */
app.use('/static', express.static(path.join(__dirname, 'public')));

/* Root route redirects to route '/index' */
app.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

/* Render the '/about' route */
app.get('/about', (req, res) => {
    res.render('about');
});

/* Dynamically render the /projects routes */
app.get('/projects/:id', (req, res) => {
    const project = data.projects[req.params.id];

    res.render('project', { project });
});

/* 404 and non-existent route handler */
app.use( (req, res, next) => {
    const err = new Error();
    err.status = 404;
    err.message = `404: I'm sorry, but ${req.path} cannot be found!`;
    console.log(err.message);
});

/* Handle server-side errors */
app.use( (err, req, res, next) => {
    err.status = (err.status || 500);
    err.message = (err.message || "Server-Side Error Occured... we swear it's not your fault!");
    console.log(`${err.status}: ${err.message}`);
});

/* Start the app and listen on port 3000 */
app.listen(3000, () => {
    console.log('App server listening on port 3000!');
});
