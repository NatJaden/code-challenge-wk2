const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
]; // An array of numbers that is to be filtered

function primeNumbers(num) {
  // A function that checks whether the numbers in the array are prime numbers
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false; // If the number is divisible the it is not a prime number thus retruns zero
    }
  }
  return num > 1; // Returns numebrs that are greater than one as numbers less than one are not prime
}
console.log(numbers.filter(primeNumbers)); // Filters the numbers array to print only prime numbers
