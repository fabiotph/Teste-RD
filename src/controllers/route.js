const { RouteModel } = require('../models/route');
const { validInput } = require('../utils/validation');


exports.getMinRoute = (from, to)=>{
    return RouteModel.calculateRoute(from.toUpperCase(), to.toUpperCase());
}

exports.addRoute = ({from, to, price})=>{
    validInput({from, to, price});
    RouteModel.addRoute({from: from.toUpperCase(), to: to.toUpperCase(), price: parseInt(price)});
}
