function swapCase(str) {
  return str
    .split("")
    .map((charcter) => {
      if (charcter === charcter.toUpperCase()) {
        return charcter.toLowerCase();
      } else if (charcter === charcter.toLowerCase()) {
        return charcter.toUpperCase();
      }
      return charcter;
    })
    .join("");
}
const test = "The Quick Brown Fox";
const outTest = swapCase(test);
console.log(outTest);
