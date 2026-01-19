# What are loops?

While conditional statements change code behaviour by deciding which code block will be executed and which will be skipped, loops allow us to execute a code block multiple times, either indefinitely or until a certain condition is met.

# `while` loop

The `while` loop is used when we have to repeat a command and we don't know how many times we have to, but we know when to stop.

Syntax:

```javascript
while(condition) {
    block of code
}
```

The expression in parentheses is evaluated at the beginning of each iteration. If it's true, the code block will be executed. Once it's complete, it jumps back to the condition and re-evaluates it. As long as the condition is true, the code block will be executed.

This means that a malformed `while` loop can run indefinitely. Usually it's bad design, but a few applications, like videogames, run on infinite `while` loops.

Example 1:

```javascript
let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}
```
<hr>

Example 2:

This time the decision to end the loop will be offered to the user through the `confirm()` window.

```javascript
let isOver = false;
let counter = 1;
 
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
```
- The loop will be repeated until the `isOver` variable is set to `true`.

- In the loop, we display the question: `"Continue the loop?"`, which is preceded by the number of the iteration (the `counter` variable).

- Note that the `counter` variable is not used in the while condition, as its role is only informative. Clicking on the `OK` button in the confirm dialog will cause the `continueLoop` variable to be set to `true` (otherwise it will be set to `false`).

- Based on the value from the `continueLoop` variable, we set a new value for the `isOver` variable. Remember that the variable that is tested in the while condition should be initialized beforehand. This is one of the most common mistakes of beginner programmers: they remember to change its value inside the loop, but forget to set its value for the first test.

<hr>

The example is correct, but has a lot of redundant code. We can simplify it. Analyze what the changes are about.

```javascript
let isOver = false;
let counter = 1;
 
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}
```

# `do ... while` loop

Similar to `while`. The `while` loop checks the condition **before** each iteration. The `do ... while` loop checks the condition **after** each iteration, which means that the code block will be executed at least once.

Syntax:

```javascript
do {
    code block
} while(condition);
```

Rewriting the previous example:

```javascript
let isOver;
let counter = 1;
 
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);
```

Note that this time `isOver` doesn't need to be initialized, as it is checked after the iteration ends while the dialog box will be called during execution. The behaviour will be the same as the previous example, in which we used `while`.

Example in which we demostrate that `do ... while` iterates at least once:

```javascript
let condition = false;
 
while (condition) {
    console.log("A while loop iteration."); // never executed
}
 
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);
```

# `for` loop

The `for` is a conditional loop. Its syntax is:

```javascript
for (initialization; condition; increment) {
    block of code
}
```

In the parentheses we will not find a single condition, but three separate fields divided by `;` which will indicate:

1. Loop initialization statement `;`
2. Loop condition statement `;`
3. Loop increment statement

These statements are optional, but it is very rare to not use all three of them.

## The `for` initialization statement

It's executed only once, before the first iteration. Usually used to either initialize or declare and initialize a variable used as a counter. We can technically use any existing variable as a counter, but it's good practice to declare a new one.

This statement is optional, but the `;` at the end must be written.

## The `for` conditional statement

It's an expression evaluated to a Boolean before each iteration. If it's evaluated to `true`, the loop will execute the code block. If it's `false`, the loop is terminated, bringing us out of the code block.

This is also optional, but the `;` at the end must be written. If not included, it is assumed always `true`, leading to an infinite loop.

## The `for` increment statement

It's always executed at the end of the current loop iteration. Most times it's used to increment or decrement the counter defined in the initialization statement, however, it can be any expression. It can also be left completely empty.

<hr>

Example 1:

Let's print to console the numbers from 0 to 9:

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

- `i = 0` is the initialization
- `i < 10` is a condition
- `i++` is an increment

<hr>

Example 2:

We have a four-element array of integers. We want to sum up the numbers. We make sure that, before starting, their `sum` is equal to `0`.

```javascript
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
```

There is a conceptual mistake in the example. It's true that our array has 4 values, but sometimes we have to evaluate different arrays, or evaluate dynamic arrays. It is better to use the length of the array to generate a condition. Let's rewrite the code as:

```javascript
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
```

# Loops and arrays

We will exercise on loops and arrays.

We want the user to enter names during execution (we will use `prompt()`), which will be placed in the array one by one.

Entering names will end when `Cancel` is pressed. Then, we will write all the elements of the array to console.

```javascript
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name !== null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
 
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
```

1. The `names` array is initially empty.

2. In each iteration of the `while` loop we call the `prompt` dialog box.
    - If the user enters a new name and presses the `OK` button, this name will be entered in the local `name` variable.
    - If the user clicks `Cancel`, the variable will contain `null`.

3. So we check in the conditional instruction if the name is different from `null`.
    - If so, the value of the `name` variable is attached to the end of the `names` array using the `push()` method (if you do not remember it, go back to the [chapter where we discussed arrays](../../02%20-%20Variables,%20Data%20Types,%20Type%20Casting,%20Comments/2.2%20-%20Complex%20Data%20Types/01%20-%20Concepts.md)).
    - If the name is null, the `isOver` variable value is changed to end the `while` loop.

After leaving the `while` loop, we go through the whole `names` array (using the `for` loop and the `length` property of the `names` array) and we display all the `names` placed there. In this way, using arrays, loops, and interaction with the user (`prompt()` dialog box) we have created and filled in a dynamic data structure. Note that, in this program, it isn't clear how many array elements there will be, or their type.

To go through the array, we initialize an `index` variable to `0`, indicating the array index, then increase it by one during each iteration. This is not the only way to go through an array.

If we wanted to go in reverse order, we can initialize the `index` variable to the `length` of the array then decrese it each loop, or we could even increment or decrement with values greater than `1`.

Example:

```javascript
let values = [10, 30, 50, 100];
 
for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}
 
for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}
 
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}
```

# `for ... of ...` loop

This is one of two variations of `for`. The `for ... of ...` loop is used with arrays and other iterative structures (not seen in this course).

Syntax:

```javascript
for (variable of array) {
    block of code
}
```

In this loop we do not specify any condition or number of iterations. It is performed as many times as the number of elements in the array.

Remember the example from before:

```javascript
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
```

The version using `for ... of ...` would be:

```javascript
let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190
```

In practice, for arrays is used the `forEach` method to iterate through array elements. We will see it in Module 5.

<hr>

Example 2:

We declare a cities array, which contains objects describing various cities. Each object contains name and population fields. Using the for ... of loop, we go through this array and display information about all cities that have more than 20 million inhabitants.

```javascript
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
 
for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}
```

Run the code and then experiment with the conditions (e.g. display all cities with more than 20 million inhabitants but less than 25 million, etc.)

# `for ... in ...` loop

The `for ... in ...` loop iterates through all the fields of the indicated object, placing the keys in the variable.

Example with object containing user data:

```javascript
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};
```

Before, if we wanted to access those fields, we used the dot notation, writing `object.key`. The key given in this notation is always treated as a literal. In the `for ... in ...` loop, this approach won't work because the key is placed in a variable.

To fix this, we use the bracket notation. This allows us to refer the selected field using `[ ]`, like arrays. In this way, the field name put inside the brackets can be either a literal or a variable.

Example:

```javascript
console.log(user.name); // -> Calvin
console.log(user[name]); // -> Calvin
```

Using bracket notation, we improve the example by displaying not only the keys, but their assigned value:

```javascript
for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};
```

# `break` and `continue`

When the JavaScript engine encounters a  `break` keyword, it exits the whole loop or `switch` statement, and jumps to the first line after that code block.

The keyword `continue` can be used in loops, but not in `switch` statements. When used, it applies to the closest surrounding loop. It starts the next iteration of the loop.

Example:

```javascript
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
```

Both break and continue are not used particularly often. We should definitely not use them when we can terminate the loop with a properly constructed condition. They are useful in emergency situations, when something unusual happens in loops with more complex iterations.

# The `break` keyword

In the `switch` examples used before, the `break` keyword is present in all `cases` except the `default` one. This is because, unlike the `if` statement, the `switch` statement does not execute only one branch, but the entire code, starting from the case that matches the condition until the end of the statement.

This behaviour is called **fall-through** and has some uses, but most of the time we want to execute only one branch. That's why we use `break`. When the JavaScript interpreter arrives to a `break`, it will jump out of the `switch` statement.

Example 1:

Check what happens when the prompt `a` is given to this code.

```javascript
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
    case "b":
        alert("Gate B: main prize");
        win = true;
    case "c":
        alert("Gate C: empty");
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
```

<hr>

Example 2:

Fall-through can be useful when more than one case should end with **exactly** the same behaviour. For example:

```javascript
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
```

The code will behave the same when "a", "A", 1 or "1" is given as the answer to the prompt.

The last important part is that if a more complex code is needed inside any given case, we should place that code in separate code blocks by additionally surrounding the code with curly brackets. This will add to code readability and allow for the declaration of variables only in the given case scope.

Example 3:

A redeclaration error would be observed in each of the cases and would not be encapsulated in its own scope.

```javascript
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
```