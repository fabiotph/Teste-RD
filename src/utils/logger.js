let logRoute = function (req, res, next) {
    let date = new Date().toUTCString();
    let method = req.method;
    let url = req.originalUrl;
    console.log(`[${method}] ${url} (${date})`);
    next();
}

exports.logRoute = logRoute;