var basket = {
  items: [],
  has_card: false,

  add_item: function(item) {
    this.items.push(item)
  },
  remove_item: function(item) {

    indx = this.items.map(function(itm) { 
      return itm.name; 
    }).indexOf(item.name);


    if (indx > -1) {
      this.items.splice(indx, 1);
    }
  },

  find_total_price: function() {
    var total_price = 0;
    for (item of this.items) {
      total_price += item.price;
    }
   return total_price;
  },
  
  apply_discount: function() {
    var total_price = this.find_total_price();
    if (total_price > 20) {
      return total_price * 0.9;
    } else {
      return total_price;
    }
  },

  apply_card_discount: function() {
    var total_price = this.apply_discount();
    if (this.has_card === true) {
      return total_price * 0.95;
     } else {
      return total_price;
     }
  }


};

module.exports = basket;
