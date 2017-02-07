var assert = require('assert');
var basket = require('../basket.js');

describe('basket', function() {

  it('should be empty at start', function() {
     assert.equal(0, basket.items.length);
  });

  it('should be able to add item', function() {
     basket.add_item({name: 'bread',
                      price: 1.05 });
     assert.equal(1, basket.items.length);
  });

   it('should remove items', function() {
    basket.remove_item({name: 'bread',
                      price: 1.05 });
     assert.equal(0, basket.items.length);
  });

   it('should find total price', function() {
    basket.add_item({name: 'bread',
                     price: 1.05 });
    basket.add_item({name: 'eggs',
                      price: 1.80 });
     basket.add_item({name: 'cheese',
                      price: 6.00 });   

     assert.equal(8.85, basket.find_total_price());
   })

   it('should give discount for baskets over value 20', function() {
    basket.add_item({name: 'sirloin',
                      price: 19.75 });
    assert.equal(25.74, basket.apply_discount().toFixed(2));
   })

   it('should give 5% discount for card', function() {
    basket.has_card = true;
    assert.equal(24.45, basket.apply_card_discount().toFixed(2));
   })

   it('should not give 5% discount if no card', function() {
    basket.has_card = false;
    assert.equal(25.74, basket.apply_card_discount().toFixed(2));
   })

});