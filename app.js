const createError = require('http-errors');
const express = require('express');
const data = require('./data.json');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/projects/:id', (req, res) => {
    const projid = req.params.id;
    const project = data.projects[projid];

    res.render('project', { project });
});

app.listen(3000, () => {
    console.log('Server running on port 3000!');
});