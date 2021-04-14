# Project Portfolio Site with Express and Node
Author: Joe Bertino, 2021

## Description
* Serving a website with dynamic and static content using Express, Node, and Pug templates.
* The website highlights my portfolio of JavaScript projects completed for the Treehouse learning platform.
* Routes (pages) served include the "Home" page, an "About Me" page, and a page for each individual project.
* Each project page includes thumbnail screenshots from the project, and links to the live project hosted on Github Pages.

## Exceeds Expectations

1) **Running with 'npm start'**: I installed the package `nodemon` to my `package.json` file, and then included the key-value pair `"start": "nodemon app.js"` in the `scripts` section of `package.json`. The server can now be launched and monitored using `npm start` from the command line.

2) **Error Handling Pug templates**: I added the pug templates `error.pug` and `page-not-found.pug` to my project to handle 404 errors and server-side errors, respectively. Both pages display the error stack in a scrollable div with a red border and monospace font.

3) **CSS Customizations**
* Linked my `layout.pug` template to a new stylesheet, "extraStyles.css", where I defined the styles for the following:
  * The red box containing the error stack in the error handling Pug templates.
  * The rainbow glowing borders for the "Live Link" and "Github Link" buttons on the project pages.
* I changed the background color of the `nav` header to "bisque".
* I changed the font size of `.box li` to 15em.
* I added box shadows to a few buttons and thumbnail images:
  * `.sidebar .thumbnail`: the picture of me in the sidebar.
  * `.sidebar a`: the "Learn More" link to my "About" page.
  * `.cell img`: the project image thumbnails on the home page.
  * `.project-img`: the project image thumbnails on the project pages.
  * `.btn-link`: The "Live" and Github links on the project pages.
