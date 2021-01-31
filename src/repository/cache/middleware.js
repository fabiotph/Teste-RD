const { Cache } = require('./cache')
let getCache = function (req, res, next) {
    let {from, to} = req.query;
    let result = Cache.get(`${from}_${to}`);
    if (result){
        console.log("com cache")
        return res.json(result);
    }
    console.log("sem cache")
    next();
}

exports.cache = getCache;