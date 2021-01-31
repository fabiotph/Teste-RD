const { RouteModel } = require('../models/route');


exports.getMinRoute = (from, to)=>{
    return RouteModel.calculateRoute(from.toUpperCase(), to.toUpperCase());
}

exports.addRoute = ({from, to, price})=>{
    RouteModel.addRoute(from.toUpperCase(), to.toUpperCase(), parseInt(price));
}
