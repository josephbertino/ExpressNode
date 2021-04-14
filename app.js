/* Get Express into this project */
const express = require('express');
const app = express();

/* Import the 'path' module */
const path = require('path');

/* Set up Pug view engine */
app.set('view engine', 'pug');
app.set(express.static(path.join(__dirname, 'views')));

/* Static middleware for serving static files */
app.use('/static', express.static(path.join(__dirname, 'public')));

/* Use index.js to render '/' */
const indexRouter = require('./routes/index');
app.use(indexRouter);

/* Use about.js to render '/about' */
const aboutRouter = require('./routes/about');
app.use(aboutRouter);

/* Use projects.js to render /projects/:id */
const projectsRouter = require('./routes/projects');
app.use(projectsRouter);

/* 404 and non-existent route handler */
const errorRouter = require('./routes/errors');
app.use(errorRouter.notFoundError);
app.use(errorRouter.globalError);

/* Start the app and listen on port 3000 */
app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});
