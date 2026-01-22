We will look at errors and exceptions in a more functional way.

# Basic types of error

## `SyntaxError`

A syntax error happens when a code is malformed: typos in keywords, unmatching parentheses, etc...

The code will not even start execution. This error is, therefore, thrown before the program is started.

Example:

```javascript
"use strict";
iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
```

Here, we made a typo in the keyword `if`, adding an additional f. The JavaScript engine treats `iff` as a function call, since it finds `( )` after `iff`, therefore doesn't know what to make of the curly brackets.

## `ReferenceError`

It happens when we try to access a function or a variable when it doesn't exist. JavaScript doesn't know the meaning of the given name, so we classify it as a semantic error. The corresponding exception is thrown at the execution time of the program, when the wrong instruction is reached. We define these as **run-time errors**.

Example 1:

```javascript
let a = b;
```

The attempt to declare variable `a` is unsuccessful because at the same time, we want to initialize it with the value of variable `b`. Variable `b` has not been declared anywhere before, so the JavaScript engine does not know this name.

Example 2:

```javascript
fun(); / -> Uncaught ReferenceError: fun is not defined
```

This time, we’ve tried to call the function fun. If we haven’t declared it before, and there is no function with this name among the standard JavaScript functions, the call ends in an error.

## `TypeError`

This type of error occurs when a certain value is not of the expected type. Typical examples are changing the constant value or checking the length of a variable that is not a string. This error is particularly important when working with objects that are outside the scope of this course.

This is a typical **run-time error**, so the appropriate exception will be thrown while the program is running, after reaching the problematic instruction.

Example 1:

```javascript
const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.
```

Trying to store the new value to the constant `someConstValue` has failed for obvious reasons, resulting in a `TypeError`.

Example 2:

```javascript
let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function
```

This time, we’ve tried to treat the contents of the variable `someNumber` as a string, and check its length. The JavaScript engine notices that the variable stores a number, and such an operation is not allowed.

## `RangeError`

This type of error is generated when you pass a value to a function that is outside its acceptable range.

This is also a **run-time error**, as the exception is thrown while the program is running, after reaching the wrong instruction. In fact, this exception is more useful when writing your own functions and handling errors. You can then throw an exception in certain situations.

Example:

```javascript
let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);
```

We’ve attempted to create two arrays, using the constructor `Array`. If we pass one argument to this function, it will be treated as the size of the newly created array. The first array (`testArray1`) is created without any problem. As you can guess, creating a `testArray2` array with a negative length fails.

## Other errors

There are a few more error types: `EvalError`, `InternalError`, and `URIError`, but they’re rather rare, and we’ll come back to them if needed.

# The `try ... catch` statement

While exception halt program execution, the `try ... catch` statement allows us to change this default action. The program will interrupt what it is currently doing, but will not automatically terminate.

Syntax:

```javascript
try {
    // code to try
} catch (error) {
    // code to run in case of an error, which throw an exception
}
```

The premise is:

- If we have a piece of code that can possibly go wrong, we can enclose it in the `try` clause.
- JavaScript will try to execute this code, and if any error occurs and an exception is thrown, the code inside the catch block will be executed
- If the try code is executed without errors, then the catch block is ignored. After executing the commands from the catch block, the program will continue to run from the first instruction outside the `try ... catch` statement.

Note that the `catch` keyword is followed by parentheses containing the parameter error. This is a variable name that will hold information about the error that was caught, and it can have any valid name, but the names `error`, `err`, or just `e`, are commonly used. In the case of an exception thrown by JavaScript, the error object will contain information about the error type, and is converted to a string to be logged or processed in any way the developer needs.

We modify the code that we saw before, which we know throws an error:

```javascript
try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!
```

- The statement that produces `ReferenceError` is now inside the try block. The result is that our code is no longer stopped by errors and we can react to it in the catch block.

- We log a message about the error. The first error that is thrown in the `try` block will always be caught, execution will jump to the catch block, and no further errors in the `try` block will be caught.

What's important is that after leaving the catch block, the program will continue to work normally.

Note that `try ... catch` will not work on a `SyntaxError`. This should not come as a surprise to you. As we have said several times before, if the JavaScript engine detects a syntax error, it will not allow you to run the program. If the program has not been run, it is rather hard to imagine that it could react somehow to what has happened.

## Task

Rewrite all examples from this chapter in such a way that the errors will be caught by a `try ... catch` statement.

# Conditional exception handling

Sometimes we want to be able to react differently to specific types of errors inside the `catch` block. We can do this by using the operator `instanceof`. We’ll discuss the operator itself further down the road. For now, it’s enough to know how we can use it when handling errors.

The syntax for `instanceof` is:

```javascript
variable instanceof type
```

If we receive an error in the `catch` block, passed as an error argument, we can check whete it is of the `ReferenceError` type as follows:

```javascript
let result = error instanceof ReferenceError;
```

The operator `instanceof` returns a boolean, so this expression will return true if the error variable does indeed hold a type `ReferenceError`, and `false` if it doesn’t. We can use `if ... else` or `switch` statements to then execute different code in the case of different errors if needed.

In the next example, we see how we can react in a specific way only to a specific type of error:

```javascript
let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2
```

It’s important to know that any variable that gets declared using the `let` keyword inside a `try` block is not accessible in the `catch` block, nor in the `finally` block, which will be discussed in a moment.

# The `finally` statement

The last optional block of the `try` statement is the `finally` block. It can be used with or without the `catch` block, and it’s always executed after `try` and `catch` blocks, regardless of whether any errors are thrown. The syntax for `try ... finally` looks like this:

```javascript
try {
    // code to try
} finally {
    // this will be always executed
}
```

For example, let's make a proper substitution to the variable `a` inside the `try` block:

```javascript
let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5
```

- The new value has been stored in variable `a` without calling an error.
- Then the content of the `finally` block is executed.
- The program continues after leaving the `finally` block, displaying our variable again. Nothing surprising, everything simple and predictable.

Let's break our example by trying to refer to a non-existent variable `b`. This will generate a `ReferenceError`:

```javascript
let a = 10;
try {
    a = b;  // ReferenceError
} finally {
    console.log(a); // -> 10
}
console.log(a);
```

This time, the exception `ReferenceError` interrupts the program in the `try` block. Because the JavaScript engine cannot find the `catch` block, it immediately jumps to the finally block, executing its contents and ending its work.

The `finally` block can also be used together with the `catch` block, as both of them are optional, but at least one of them is required by the try statement. If none of them is present, a `SyntaxError` is thrown:

```javascript
let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!"); // -> An Error!
} finally {
    console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10
```

In this case, the exception causes a jump to the `catch` block, then to the `finally` block. The program then continues to work outside of the `try ... catch` statement.

## Why should we use the `finally` block?

Technically we can just write code outside of the `try ... catch` statement, and it will be executed:

```javascript
let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!");
}
console.log("Finally!");
```

This code will have a similar result as the previous example: it will log `"An Error!"` and then `"Finally!"`.

It’s true that in this simple example, both scripts will behave the same, but there are slight differences. The most important is that the `finally` block will be executed even when an error is thrown from the `catch` block:

```javascript
let a = 10;
try {
    a = b;  // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
 
}
console.log("Finally!");
```

Now the last `console.log` call will never be executed, as another error, this time uncaught, is thrown in the `catch` block.

This won’t happen if we use the `finally` block like this:

```javascript
let a = 10;
try {
    a = b;  // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
 
} finally {
    console.log("Finally!");
}
```

Now the `console.log call` from the finally block will be executed, although this doesn't change the fact that program execution will be stopped at this second `ReferenceError`, as it isn’t caught.

`Try ... catch ... finally` blocks can be nested, so we can use a whole `try ... catch` block inside another `try ... catch` block. This is useful when we expect multiple errors to occur and need to handle them all.

Example:

```javascript
let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    try {
        console.log(b); // Second ReferenceError
    } catch {
        console.log("Second catch!"); // -> Second catch!
    }
} finally {
    console.log("Finally!"); // -> Finally!
}
```

In this example, we catch the exception inside the `catch` block by placing the code inside another `try ... catch` statement.

# The `throw` statement and custom errors

To throw an exception, we use the `throw` instruction. It is followed by any value that will be treated as an exception. It can be, a number, or one of the ready-made error objects, for example `RangeError`.

An exception that we throw will cause the program to react in the same way as the original JavaScript exceptions, meaning that it will stop its execution. That is, unless we throw it inside the `try` block to handle it.

Let's look at a simple example, without trying to find any special meaning in it. This is just an illustration of the use of the `throw` instruction:

```javascript
console.log("start"); // -> start
throw 100; // -> Uncaught 100
console.log("end");
```

An unsupported exception (if the number 100 can be called an exception) causes the program to stop. The second `console.log` instruction is never executed.

Let's close the throw instruction inside the `try` block:

```javascript
console.log("start"); // -> start
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end
```

This time, our exception is caught and handled in the `catch` block, and doesn’t interrupt further execution.

<hr>

We want a function that will allow us to count factorials. We will write it in an iterative version, meaning we will use a loop. It will be neither the most elegant, nor the most optimal solution, but simple and legible.

```javascript
function factorial(n) {
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(3)); // -> 6
console.log(factorial(5)); // -> 120
console.log(factorial(8)); // -> 40320
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Infinity
```

Let's say that we are a little scared by the large numbers returned by our function, especially the `Infinity` value, so we decide to limit the maximum range of supported values. We will not accept arguments larger than 20.

```javascript
Function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20
```

As we mentioned earlier, the `throw` instruction can take any value. Previously, we used a simple number, but this time we’re reaching for something more complex. It is an object, which is a composite data type.

You can create a new object in many ways, including by using the operator `new`. Using this operator, we create a `RangeError` class object, which is a predefined error that we discussed a while ago. The new object is initiated by the `"Max value 20 string"`. And such a new object, of the `RangeError` type, containing, among other things, the string we provided, will be thrown if the `n` parameter exceeds the allowed value.