const assert = require('assert');
const { validInput } = require('../src/utils/validation');

describe('Validation test', function() {

    describe('Input valid', function() {
      let input = {
          from: "BRC",
          to: "GRU",
          price: 10
      }
      it('should not throws error', function() {
        assert.doesNotThrow(()=>validInput(input));
      });
     
    });

    describe('Input invalid', function() {

        describe('From Invalid', function() {
            let input = {
                from: [],
                to: "GRU",
                price: 10
            }
            it('should throws error', function() {
                assert.throws(()=>validInput(input));
            });
        });

        describe('To Invalid', function() {
            let input = {
                from: "BRC",
                to: [],
                price: 10
            }
            it('should throws error', function() {
                assert.throws(()=>validInput(input));
            });
        });

        describe('Price Invalid', function() {
            let input = {
                from: "BRC",
                to: "GRU",
                price: "test"
            }
            it('should throws error', function() {
                assert.throws(()=>validInput(input));
            });
        });
      });
});
  
