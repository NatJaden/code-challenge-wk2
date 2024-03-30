function swapCase(str) {
  return str
    .split("") // splits the string into characters
    .map((charcter) => {
      if (charcter === charcter.toUpperCase()) {
        return charcter.toLowerCase(); //Changes the charcters to lowercase if they are in uppercase
      } else if (charcter === charcter.toLowerCase()) {
        return charcter.toUpperCase(); //Changes the charcters to lowercase if they are in uppercase
      }
      return charcter; //Returns each character
    })
    .join(""); // Joins every character back into a string
}
const test = "The Quick Brown Fox";
const testOuput = swapCase(test);
console.log(outTest); //Prints the output where every chracters case is changer to the opposite case

