const { RouteModel } = require('../models/route');


exports.getMinRoute = (from, to)=>{
    return RouteModel.calculateRoute(from, to);
}

exports.addRoute = (obj)=>{
    RouteModel.addRoute(obj);
}
