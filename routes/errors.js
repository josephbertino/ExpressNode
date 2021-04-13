const notFoundError = (req, res, next) => {
    // Generate Error object for this 404 error
    const err = new Error(`I'm sorry, but the path '${req.path}' cannot be found!`);
    err.status = 404;
    // Send this error object to the global error handler
    next( err );
};

/* Handle server-side errors */
const globalError = (err, req, res, next) => {
    // Output error log to console
    err.status = (err.status || 500);
    err.message = (err.message || "Server-side error occurred... we swear it's not your fault!");
    console.log(`${err.status}: ${err.message}`);
    
    // Set the status of the response object
    res.status(err.status);
    
    // Render the appropriate error handling page
    if (res.statusCode === 404) {
        res.render('page-not-found', { err });
    }
    else {
        res.render('error', { err });
    }
};

module.exports = { notFoundError, globalError };