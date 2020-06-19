// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function
 can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 



/*

  Functions search outwards towards their parent and grandparent scopes to 
draw upon the same materials (be they variables, objects, arrays, functions) that are 
available to its parents. nestedFunction is a child of myFunction. Becase 'internal'
is in the scope of its parent, nestedFunction may utilize the 'internal' variable.


*/


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to
 return the summation of that number. For example, `summation(4)` should
  return 10 because 1+2+3+4 is 10. */


function summation(param){
  newarr = [param];
  sum = 0;
  for(let i = 0; i < param; i++){
    newarr.push(i)
  }
  newarr.reduce(function(acc, item){
    return sum = acc + item
  }, 0);
  console.log(sum);
}

summation(4);
