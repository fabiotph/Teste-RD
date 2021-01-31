const { Cache } = require('./cache')
let getCache = function (req, res, next) {
    let {from, to} = req.query;
    let result = Cache.get(`${from}_${to}`);
    if (result)
        return res.json(result);
    next();
}

exports.cache = getCache;