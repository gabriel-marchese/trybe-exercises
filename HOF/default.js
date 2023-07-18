
// const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
// greeting(); // // Welcome pessoa usuária!

const multiply = (number, value = 1) => {
    const result = number * value;
    return result
  };
  
  console.log(multiply(8));