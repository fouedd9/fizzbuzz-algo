const fizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    result.push(output || i);
  }
  return result;
};
// N'exécute le code CLI que si le script est lancé directement
// et non pas lors d'une importation dans les tests
if (require.main === module) {
  const n = Number(process.argv[2]);

  if (!Number.isInteger(n) || n <= 0) {
    console.error(
      "Please provide a positive number. Example: node fizzbuzz.js 20",
    );
    process.exit(1);
  }

  fizzBuzz(n).forEach((v) => console.log(v));
}
module.exports = fizzBuzz;
