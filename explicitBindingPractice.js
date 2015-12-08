/*
  Create an object that represents purchase.
  The purchase has itemsPurchased: 3, price: 3.99, total: 0

  Create a function (outside the object)
  That calculates the total from the item quantity using the this keyword

  Get a function created from using bind on the purchase object, and invoke it
  Console log the price is correct
*/
var purchase = {
  itemsPurchased: 3,
  price: 3.99,
  total: 0
};

var calcTotal = function() {
  this.total = (this.itemsPurchased * this.price);
};

var purchaseFunc = caclTotal.bind(purchase);

  purchaseFunc(); //invokes calc total with purchase as the this pointer
