exports.generatedErrors = (err, req, res, next) =>{

    const statuscode = err.statuscode || 500;

    res.status(statuscode).json({
        message: err.message,
        errName: err.name,
        // stack: err.stack,
    })
};