# Functions

Functions are separate pieces of code that make up a closed logical whole, made to execute a specific task. To these separate pieces of code, we assign a name. With this name we can call it whenever we want. Though, some functions, called anonymous functions, don't have a name.

Declaring and calling a function are independent from eachother.

## Declaring a function

Like variables, we need to declare functions before using them. This process is called **function statement**. The syntax is:

```javascript
function functionName() {
   code
}
```

- A function statement starts with the `function` keyword, followed by the chosen name.
- After the name, there are parentheses that optionally have parameters.
- After the parentheses, the code block starts.

As an example, let's create a function that calculates the average temperature. We will call it `getMeanTemp`. It will use variables declared *outside* of its scope for now, but it is never actually done that way. This time it's just for example.

```javascript
let temperatures;
let sum;
let meanTemp;
function getMeanTemp() {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;    
}
```

Of course, as we are only declaring a function, this code will have no effect by itself. To execute it, we have to **call** the function.

## Calling functions

To call a function, we just need to write its name and follow it with parentheses. We will complete the example from above:

```javascript
let temperatures;
let sum;
let meanTemp;
function getMeanTemp() {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length; 
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332
```

We declare the `getMeanTemp` function at the beginning of the program, after declaring the variables. Later in the code, we call it twice by using `getMeanTemp()`

Functions are usually declared before they are called, most of the times at the start of the program. This is only for good practice, to increase readability. Function declarations can be made anywhere in the code, and the interpreter will move them to the top of the scope, as long as they are in scope.

So this code:

```javascript
let name = Alice
function showName() {
     console.log(name);
}
showName(); // -> Alice
```

Works exactly like this code:

```javascript
let name = Alice
showName(); // -> Alice
function showName() {
     console.log(name);
}
```

## Functions: local variables

[Reminder from Module 2](../../02%20-%20Variables,%20Data%20Types,%20Type%20Casting,%20Comments/2.0%20-%20Variables/01%20-%20Concepts.md#Scope): local variables are declared and used in limited scope, like code blocks and functions.

Example:

```javascript
let temperatures;
let meanTemp;
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
       sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332
```

In this code, an example of local variable is `sum`.

In the example before, we declared it outside the `getMeanTemp` function (it was a global variable), though we only refer to it inside the function. A global declaration was therefore unnecessary, so we declared `sum` locally.

The behaviour of the program is the same but the code is clearer, as we only use `sum` inside `getMeanTemp`. In general, we should aim to separate the function from the surrounding code as much as possible. There are still two variables variables that we need to look at: `temperatures` and `meanTemp`.

## The `return` statement

What is `return` for?

- It causes the function to end exactly where this keyword occurs, even if there are further instructions.
- It allows us to return a given value from inside the function to the place where it was called.

Let's change example for now and evaluate simpler code:

```javascript
function showMsg() {
     console.log("message 1");
     return;
     console.log("message 2");
}
showMsg(); // -> message 1
```

The function `showMsg` has two `console.logs()` separated by `return`. As expected, only `"message 1` gets displayed, then `return` interrupts the function.

In practice, though, using return like this doesn't make much sense since the second message will never get called. We can, however, use conditionals to decide what gets displayed or interrupt the function in case of errors.

If we place anything else (literal, variable, function) besides `return`, the value will be returned wherever it was called, and can be assigned to a variable. For example:

```javascript
function getTrue() {
     return true;
}
let test = getTrue();
console.log(test); // -> true
```

We declare a `getTrue` function, which always returns `true`. We will store this value in the `test` variable.

Let's *return* to the temperatures example. Until now, `getMeanTemp` made calculations and stored them inside the global variable `meanTemp`. Now, we will declare a local `result` variable, and use `return` to assign it to `meanTemp`.

```javascript
let temperatures;
let meanTemp;
function getMeanTemp() {
     let sum = 0;
     let result;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     result = sum / temperatures.length;
     return result;  
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);
```

Notice that the `result` variable is only used to temporarily store the code. We can simplify it even more by placing the operation right after the `return`, deleting `result`:

```javascript
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}
```

At this point, the `meanTemp` vaiable has also become redundant. We can simply place the returned value of `getMeanTemp` directly into `console.log()`:

```javascript
let temperatures;
function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp()}`);

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp()}`);
```

This code now looks functional. The `getMeanTemp` is logically independent and operates on local variables. There is still one problem: we count the mean using an array declared globally. We would also like to calculate the mean for other arrays. To do this, we introduce function parameters.

## Parameters

The use of parameters in a function is optional, as they may not require them, just like some functions don't require a `return` statement. However, most of the time we create functions that have definite parameters and return values.

A function's parameters appear in its declaration, separated by commas, in the parentheses after the name. It only requires a name, they will be automatically declared as local variables.

If parameters are present, the functions should have the parameters filled appropriately when called. The values used during the call are called **arguments**. For example, we define:

```javascript
function add(first, second) {
return first + second;
}
```

The function has two parameters: `first` and `second`. The value of these two local variables will be initialized when the function is called:

```javascript
let result = add(5, 7);
console.log(result); // -> 12
```

When called, `add` will have assign `5` as the value of `first` and `7` as the value of `second`.

Any type of data can be passed to a function, be it simple or complex. For example, let's make a `getElement` function, which will have an array and an index as parameters, and will return the element of the array at the specified index:

```javascript
function getElement(elements, index) {
return elements[index];
}
```

We call it with sample arguments:

```javascript
let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);
console.log(name); // -> Eve
```
<hr>

Going back to the mean temperature program, we will add one parameter to `getMeanTemp`: `temperatures`. We will delete the global variable of the same name and create two others: `day1` and `day2`, which will contain the measurement data, which will be passed to the function.

```javascript
function getMeanTemp(temperatures) {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     return sum / temperatures.length;
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean:
16.666666666666668

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`); // -> mean:
18.083333333333332
```

The first time the `getMeanTemp` function is called, the `day1` variable is passed on to the `getMeanTemp` function as an argument. The calculations performed inside the function using the temperatures parameter will therefore be based on the values from the `day1` variable. In the second call, we pass another array to the function, stored in the `day2` variable.

## Shadowing

As said before, the parameters of a function are declared as local variables. Just like other variables explicitly declared inside a function, they [shadow](../../02%20-%20Variables,%20Data%20Types,%20Type%20Casting,%20Comments/2.0%20-%20Variables/01%20-%20Concepts.md#variable-shadowing) variables of the same name in outer scopes.

Let's return to the example of adding numbers. The `add` function has two parameters: `first` and `second`. We will also declare, out of the function, global variables named `first`, `second`, `third` and `fourth`.

If, inside the function, we refer to the variable:

- `first`: it will be treated as the parameter, as it shadows the `first` global variable.
- `second`: it will also be treated as the parameter.
- `third`: it will be treated as a global variable, because there is no local variable that shadows it.
- `fourth`: it will be treated like `third`.

And of course, outside of the function, each one of them will be treated as global.

```javascript
function add(first, second) {
return first + second;
}
let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120
```

Analyze the example, writing down the values that are passed to the `add` function in each of the calls.

Also try to run and analyze the example below, in which variables can be shadowed with both parameters and local variables:

```javascript
let a = 100, b = 200, c = 300;
function test(a) {
     let b = 10;
     console.log(a); // parameter a
     console.log(b); // local variable b
     console.log(c); // global variable c
}
test(1);   // -> 1
      // -> 10
      // -> 300
console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300
```