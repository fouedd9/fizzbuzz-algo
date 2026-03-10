# FizzBuzz Algorithm

This repository contains a JavaScript implementation of the classic FizzBuzz problem.

## Rules

For numbers from 1 to N:

- If the number is divisible by **3**, print **Fizz**
- If the number is divisible by **5**, print **Buzz**
- If the number is divisible by **3 and 5**, print **FizzBuzz**
- Otherwise, print the number

## Implementation

The algorithm iterates from **1 to N** and applies the FizzBuzz rules using the modulo operator.

```javascript
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
```

# Run the script

```
node fizzbuzz.js 15
```

Example output

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

# Run the test

A simple test is included to verify that the algorithm returns the expected result.

```
node fizzbuzz.test.js
```

Expected output:

```
✅ Test passed
```
