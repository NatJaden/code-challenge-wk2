function generetedNumberRange(num1, num2) {
  const generetedArr = [];
  if (num1 >= num2) {
    for (let i = num1; i >= num2; i--) {
      generetedArr.push(i);
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      generetedArr.push(i);
    }
  }
  return generetedArr;
}
const arr1 = generetedNumberRange(-100, 7);
console.log(arr1);