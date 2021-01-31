const assert = require('assert');
const { RouteModel } = require('../src/models/route');

describe('Route test', function() {
    before(function(){
      RouteModel.addRoute({from: "GRU", to: "BRC", price: 10})
      RouteModel.addRoute({from: "GRU", to: "SCL", price: 18})
      RouteModel.addRoute({from: "GRU", to: "ORL", price: 56})
      RouteModel.addRoute({from: "GRU", to: "CDG", price: 75})
      RouteModel.addRoute({from: "SCL", to: "ORL", price: 20})
      RouteModel.addRoute({from: "BRC", to: "SCL", price: 5})
      RouteModel.addRoute({from: "ORL", to: "CDG", price: 5})
    });

    describe('Get the shortest path and price for the route GRU -> ORL', function() {
      let result = RouteModel.calculateRoute("GRU", "ORL")
      it('should return price 35', function() {
        assert.strictEqual(result.price, 35);
      });
      it('should return path [GRU, BRC, SCL, ORL]', function() {
        assert.deepStrictEqual(result.route, ['GRU', 'BRC', 'SCL', 'ORL']);
      });
    });

    describe('Get the shortest path and price for the route GRU -> ORL after added new route', function() {
      
      RouteModel.addRoute({from: "BRC", to: "ORL", price: 10})
      
      let result = RouteModel.calculateRoute("GRU", "ORL")
      it('should return price 20', function() {
        assert.strictEqual(result.price, 20);
      });
      it('should return path [GRU, BRC, ORL]', function() {
        assert.deepStrictEqual(result.route, ['GRU', 'BRC', 'ORL']);
      });
    });

    describe('Get the shortest route and the price of the route that doesnt exist', function() {
      let result = RouteModel.calculateRoute("ORL", "BRC")
      it('should return null', function() {
        assert.strictEqual(result, null);
      });
    });
});
  
