/*
Since Page Not Found errors are technically not recognized as errors by Express, 
We need to catch these errors with middleware
*/
const notFoundError = (req, res, next) => {
   
    // Generate Error object for this 404 error
    const err = new Error(`I'm sorry, but the path '${req.path}' cannot be found!`);
    err.status = 404;
    // Send this error object to the global error handler, which ought to be the
    // next piece of middleware called in app.js
    next( err );
};

/*
Handle all errors, defaulting to a server-side error if the error status 
and message are not set
*/
const globalError = (err, req, res, next) => {
    // Set the error status and message
    err.status = (err.status || 500);
    err.message = (err.message || "Server-side error occurred... we swear it's not your fault!");
    // Output error log to console
    console.log(`${err.status}: ${err.message}`);
    
    // Set the status of the response object
    res.status(err.status);
    
    // Render the appropriate error handling page
    if (res.statusCode === 404) {
        return res.render('page-not-found', { err });
    }
    else {
        return res.render('error', { err });
    }
};

// Export these two functions
module.exports = { notFoundError, globalError };