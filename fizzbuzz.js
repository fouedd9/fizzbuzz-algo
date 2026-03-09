const fizzBuzz = (n) => {
  const rules = [
    { divisor: 3, output: "Fizz" },
    { divisor: 5, output: "Buzz" },
  ];

  for (let i = 1; i <= n; i++) {
    const value = rules
      .filter(({ divisor }) => i % divisor === 0)
      .map(({ output }) => output)
      .join("");

    console.log(value || i);
  }
};

const n = Number(process.argv[2]);

if (!Number.isInteger(n) || n <= 0) {
  console.error(
    "Please provide a positive number. Example: node fizzbuzz.js 20",
  );
  process.exit(1);
}

fizzBuzz(n);
