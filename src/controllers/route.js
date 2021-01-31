const { RouteModel } = require('../models/route');
const { validInput } = require('../utils/validation');
const { Cache } = require('../repository/cache/cache');
const { Observable } = require('../repository/cache/observable')

const observable = new Observable();
observable.subscribe(Cache)

exports.getMinRoute = (from, to)=>{
    let result = RouteModel.calculateRoute(from.toUpperCase(), to.toUpperCase());
    Cache.set(`${from.toUpperCase()}_${to.toUpperCase()}`, result);
    return result;
}

exports.addRoute = ({from, to, price})=>{
    validInput({from, to, price});
    RouteModel.addRoute({from: from.toUpperCase(), to: to.toUpperCase(), price: parseInt(price)});
    observable.notify();
}
