//Accepts two numbers
function generetedNumberRange(num1, num2) {
  const generetedArr = []; //stores the generated numbers
  if (num1 >= num2) {
    for (let i = num1; i >= num2; i--) {
      generetedArr.push(i); // If num1 is greater than or equal to num2, generate numbers in descending order
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      generetedArr.push(i); // If num2 is greater than or equal to num1, generate numbers in ascending order
    }
  }
  return generetedArr;
}

console.log(generetedNumberRange(-100, 7));
