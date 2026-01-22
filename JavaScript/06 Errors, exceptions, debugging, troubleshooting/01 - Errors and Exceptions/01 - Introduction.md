# Errors and exceptions

We will generate syntax, semantic and logical errors in JavaScript, to test in a controlled way. We want to write an arrow function called `multiply`, which takes two arguments:

```javascript
let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
let result = multiply(10, 20);
console.log(result);
```

We can see a typical syntax error: we forgot about the comma between parameters. This error is detected by the JavaScript engine, which blocks the execution. We correct it, then make another error:

```javascript
let multipl = (a, b) => a + b;
let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
console.log(result);
```

This time, we have a typo in the name of the declared function: instead of `multiply`, we’ve written `multipl`. In the call, we use a multiply name, which does not exist. This is a semantic error, since there is no function with that name. The execution of the program is blocked once that line is reached.

Let's correct the error:

```javascript
let multiply = (a, b) => a + b;  
let result = multiply(10, 20);
console.log(result); // -> 30 ?
```

The program now runs successfully, but the result is strange. We have committed a logic error: the code is technically correct, but we summed the numbers instead of multiplying them. The interpreter is unable to detect these errors. We correct the code once again:

```javascript
let multiply = (a, b) => a * b;
let result = multiply(10, 20);
console.log(result); // -> 200
```

When JavaScript detects syntactic or semantic errors, it generates and ***throws*** specific objects, which contain information about the error. In this case, we say that an error has been thrown.

- For syntax errors, the JavaScript engine does not allow the code to run, and we receive information on the console.
- Other errors, like semantic errors, are called **run-time errors**, as they appear when the program is running. We can also call them **exceptions**.

By default, thrown exceptions interrupt program execution and cause the appropriate information to appear on console, as we have seen just now.

Let's generate the erroneous situation again:

```javascript
console.log('abc'); // -> abc
conole.log('def'); // -> Uncaught ReferenceError: conole is not defined
console.log('ghi');
```

The typo in the word `conole` is a semantic error, called `ReferenceError` because Javascript does not know such a word. The program will stop working only at the second line, executing the first one just fine. It is possible to prevent a program from halting in such a situation. This process is called exception handling or, more generally, error handling.

Like many other languages, JavaScript uses the statement `try ... catch`:

```javascript
try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {  
    console.log(error.message); // -> conole is not defined 
}
```

If an exception is thrown in the code block after the try keyword, the program does not interrupt completely, but jumps to the part of the code after the catch keyword, and continues from there. We'll see more shortly.

# Errors without exceptions

In JavaScript, not all erroneous situations throw exceptions. Many of them are handled in a slightly different way. The best example are arithmetic errors:

```javascript
console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN
```

None of the above commands will generate an exception, although they don't look like the most correct arithmetic.

- Dividing by zero will result in an Infinity value. Multiplication of a number by a string, which will represent a number, will automatically convert this string to a number (and then perform multiplication).

- An attempt to perform an arithmetic operation on a string that does not represent a number (i.e. that cannot be converted) will result in NaN (not a number).

- At least two of these cases are clearly wrong (the first and the third), but instead of exceptions, the information about the error is the specific value that is returned.

Another example:

```javascript
console.log(Math.pow("abc", "def")); // -> NaN
```

This time, we use the `pow` method of `Math`, which is used to raise a given number to the given power. `Math.pow` is a function that takes two numbers as arguments and returns the result of their power. However, the two strings of characters we’ve provided to this function are hard to call numbers. The function does not generate an exception, however, but returns the `NaN` value.

The conclusion is that if you are learning about a new function or operator, you have to check in the documentation (e.g. on the MDN page) how they behave in the case of errors. Some of them will generate exceptions, while others will return some specific values. Depending on that, you will be able to properly prepare yourself for handling errors using the `try` method or simple conditional instructions. For the examples just shown, the most sensible solution would be to check if the provided values really are numbers (remember the `typeof` operator?).

# Limited confidence

Programs are not run in a vacuum. Usually during their execution, there are interactions with users or other programs. The behavior of both users and other systems should be treated with caution, and we cannot assume that the user will provide data in the format we require, or that the data server will always work. Such unexpected situations will also be sources of errors in our program. And although they are not directly dependent on us, it is our responsibility to anticipate potentially dangerous situations.

If, for example, we write a calculator to which the user enters their values, then we should probably check if the divisor is not a zero before we do the division. Theoretically, the user should know that we do not divide by zero, but we are responsible for the stability of the program. Do not believe the user or other systems. Predict what may go wrong, and check the data received before you use it in your program.

Let's write a piece of code that will ask you to enter two numbers. We then want to display the result of dividing the first number by the second:

```javascript
let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}
```

- `prompt` will return the entered value, always as a string.
- We are explicitly converting such a string into a number using the `Number` constructor.
- Since we disbelieve the user, we predict that instead of a number, they could have given a string such as `"abcd"`, or a second value equal to `"0"`.
- Therefore, before we perform the division, we check whether we can accept the converted values.
    - We use the `Number.isFinite` method for this purpose. It returns `true` if the argument is a correct number, and `false` if it is, for example, `Infinity` or `NaN`.
    - Additionally, we check if the divisor is not zero.