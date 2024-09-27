// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  let diff = []
  for (j=0; j<numbers.length-1 ; j++){
    diff[j] = numbers[j]- numbers[j+1]
  }
  return diff
}

console.log(subtract(10, 2, 3)); // Example usage
console.log(subtract(10, 2, 3,9,77)); // Example usage
