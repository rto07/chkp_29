/*PROBLEM: Using the shoppingCart variable, create a function that takes the shoppingCart variable and returns the total cost of both items as the total variable.*/

//1st try below

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


/*FEEDBACK: 
For your code, inside your function definition you are trying to work with the shoppingcart varaible. It's scope is outside the function and defeats the purpose of having a function, and of passing in that value to the function. We typically want to avoid referencing outside variable while inside a function if possible. In this case the given code already passes in a parameter for you to use.*/

//Starting Code

var shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  // code below

  // code above
  return total;
}

getTotalCost(shoppingCart);
