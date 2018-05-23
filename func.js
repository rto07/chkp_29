var shoppingCart = [20, 15];

function getTotalCost(prices){ 
  total = 0; 
  total = prices.reduce((prices, total) => prices + total);

  return total;
}

getTotalCost(shoppingCart);

//some of the confusion came when calling the functionin the console. I was inputing "getTotalCost(45,45);" into the console and received an error message. Took me a while to figure out all I had to do was change the values within the shoppingCart variable. Duh. 
