# FizzBuzz Algorithm

This repository contains a JavaScript implementation of the classic FizzBuzz problem.

## Rules

For numbers from 1 to N:

- If the number is divisible by **3**, print **Fizz**
- If the number is divisible by **5**, print **Buzz**
- If the number is divisible by **3 and 5**, print **FizzBuzz**
- Otherwise, print the number

## Implementation

The solution uses a **rules-based approach** to make the algorithm easily extensible.

```javascript
const rules = [
  { divisor: 3, output: "Fizz" },
  { divisor: 5, output: "Buzz" },
];
```

This allows adding new rules without modifying the main algorithm.

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
