var shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  // code below
  var prices =
      shoppingCart.reduce(function (accumulator, n) {
        return accumulator + n;
      });
  // code above
  return total + prices;
}

getTotalCost(shoppingCart);