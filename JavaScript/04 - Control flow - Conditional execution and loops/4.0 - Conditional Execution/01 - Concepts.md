# Conditional statements

Conditional instructions are executed on the basis of the user's decision, result of previous calculations, or other information. From this chapter onwards, make sure to type your own code to understand the concepts.

## `if` statement

The `if` statement is the simplest control flow instruction. It checks the given condition and, depending on its boolean value, either executes a block of code or skips it.

The `if` keyword **needs** to be followed by the condition in parentheses, which can also be an expression, which will be evaluated to a Boolean. If the value is `true`, the code block is executed. If it's `false`, it will be skipped.

Syntax:

```javascript
if (condition) {
    block of code
}
```

Example:

```javascript
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}
```

In the example, there is one line inside the if block of code, which means that we could omit the curly brackets around that block. However, it’s always better to use curly brackets. That way, the code is cleaner and easier to read, and it also saves you from a very common error that happens when trying to add another instruction inside an `if` block and forgetting to add brackets.

Example of the mistake:

```javascript
let isUserReady = confirm("Are you ready?");
 
if (isUserReady)
    console.log("User ready!");
    alert("User ready!");
```

Check how this piece of code will behave when you run it, depending on your answer to the question "Are you ready?", then fix this code by closing both commands (console.log and alert) in the block. Check how this will affect the program.

We talked about code blocks, and more specifically their scope, in the [section devoted to variables](../../02%20-%20Variables,%20Data%20Types,%20Type%20Casting,%20Comments/2.0%20-%20Variables/01%20-%20Concepts.md#Scope). Keeping in mind these notions, here's a practical example to remind us:

```javascript
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined
```

The `total` variable is declared inside the block therefore, when trying to refer to it outside of the block, it will cause an error.

<hr>

Let's look at another example:

```javascript
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
 
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
 
console.log(shippingCost);
```

Here, to set the `shippingCost` to zero, the userAge needs to be over 21. The second `if` is calculated and needs the `cartValue` to be over or equal to 300, or the `points` to be greater than or equal to 500.

Another way to write it is by using AND (`&&`):

```javascript
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}
```

Here the condition will be evaluated to true when:

- `userAge` is greater than 21 AND;
- `cartValue` is greater than or equal to 300 OR `points` is greater than or equal to 500.

So, we need to have the first condition met, and at least one from the second or third conditions.

## `if ... else` statement

Allows us to execute code if condition is not met by adding the keyword `else` at the end of the first code block. This keyword is optional and is followed by another codeblock if used.

Syntax:

```javascript
if (condition) {
  condition - true code
} else {
  condition - false code
}
```

We can rewrite the previous example as:

```javascript
let isUserReady = confirm("Are you ready?");
 
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}
```

## `if ... else ... if` statement

Sometimes flowing into only two branches isn't enough. We can solve this by chaining `if ... else` statements.

Syntax:

```javascript
if (conditions_1) {
  code
} else if (condition_2) {
  code
} else if (condition_3) {
  code
} else {
  code
}
```

Example:

```javascript
let number = prompt("Enter a number", 0);
 
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}
```

In the code visible in the example, only one alert will be shown, and JavaScript will stop checking conditions after the first condition that has been met.

<hr>

In the next, longer example, we can see the usage of cascading ifs with elses, and also complex logical conditions. Feel free to mess around with the values assigned to the variables to see how the results change.

```javascript
const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}

/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}

/** show message */
if (isOrderValid) {
console.log(shippingCost);
} else {
console.log("Cannot order if under 21");
}
```

To summarize what’s going on, we can dissect each case separately:

- if `userAge` is less than 21 and `hasParentsApproval` is false, the order is invalid;
- If `userAge` is less than 21 but `hasParentsApproval` is set to true, the shippingCost will be reduced by 5;
- If `userAge` is 65 or higher, `shippingCost` is reduced to zero;
- If `userAge` is lower than 65, but higher than or equal to 21 AND one of the following:
    - `hasParentsApproval` is equal to true;
    - `cartValue` is greater than 300;
    - `points` is greater than 500;
    
    &emsp;&nbsp;&nbsp;then the shippingCost is reduced to zero.

In any other case, the cost remains at the default value.

After all of this, we do another check:

- If `addInsurance` is set to true;
- AND in addition `orderIsValid`;
- AND `hasPromoCode` is not true, then we add `INSURANCE_COST` to the shippingValue.

In the end, we display the shippingCost if the order is valid, and the message if it is not.

# Conditional operator (ternary)

We already talked about the ternary operator in a [previous part](../../03%20-%20Operators%20and%20User%20Interaction/3.1%20-%20String,%20comparison,%20other%20JS%20operators/01%20-%20Concepts.md#ternary). It is often used as an alternative to `if ... else`.

If the operands are complex operations, it will calculate them first, then execute the comparison and choice:

```javascript
let start = confirm("Start?");
start ? alert("Here we go!") : console.log("Aborted");
```

Though, in this specific case, it is better to just choose the string then have the `log()` method after. We use it only as an example.

# `switch ... case` statement

It is not used often, compared to the `if` statement. It is similar to nested `if ... else` statements, but instead of evaluating multiple expressions, `switch` evaluates only one conditional expression, then tries to match it to the given `cases`. It is possible to have no `case`, but that is useless.

Syntax:

```javascript
switch (expression) {
    case first_match:
        code
        break;
    case second_match:
        code
        break;
    default:  
        code
}
```

- It starts with `switch` then, in parentheses, the expression to be calculated.
- We then open a code block, in which we will put a `case` keyword, followed by the value we want to match, then we end the line with `:`.
- After `:`, there is a code block to be executed when the expression matches the value.
- Though it's optional, we generally use `break;` to get out of the code block, unless we want to execute all of the code that comes after. For this reason, there's no point to add `break;` to the last line.
- A special case where we simply write `default:` before the code block can be used, and it's placed last by convention. It is executed when none of the cases match the expression.
- The match itself is made using the identity operator (`===`), so it checks both value and type.

Example:

```javascript
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
```