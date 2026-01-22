**Exercise 1:** Write your own `div` function that will take two call arguments and return the result of dividing the first argument by the second. In JavaScript, the result of dividing by zero is the value `Infinity` (or `-Infinity`, if we try to divide a negative number). Change this.

If you pass `0` as the second argument, your function should throw a `RangeError` exception with the appropriate message. Prepare a test call of the function for both valid division and division by zero.

<details>
<summary>Sample solution</summary>

```javascript
function div(a, b) {
    if (b == 0) {
        throw new RangeError("Can't divide by 0");
    }
    return a / b;
}
console.log(div(4, 2)); // -> 2
console.log(div(4, 0)); // -> Uncaught RangeError: Can’t divide by 0
```
</details>

<hr>

**Exercise 2:** The following array of numbers has been declared:

```javascript
let numbers = [10, 40, 0, 20, 50];
```

Write a program that, in a loop, divides the number 1000 by successive elements of the numbers `array`, displaying the result of each division.

To divide the numbers, use the function from the previous task. Use the `try ... catch` construction to handle an exception thrown in the case of division by zero. If such an exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by successive elements of the array).

<details>
<summary>Sample solution</summary>

```javascript
for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(result);
}
```
</details>