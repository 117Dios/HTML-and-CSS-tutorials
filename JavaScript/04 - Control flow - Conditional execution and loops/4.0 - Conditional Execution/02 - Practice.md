**Exercise 1:** Write a script that will ask the user to input a number.

Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.

<details>
<summary>Sample Solution</summary>

```javascript
let number = prompt("Enter a random number");
if(number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}
```
</details>

<hr>

**Exercise 2:** Rewrite the code from the previous task, replacing if with a ternary conditional operator.

<details>
<summary>Sample Solution</summary>

```javascript
let number = prompt("Enter a random number");
let message = (number > 90 && number < 110) ? "Bingo!": "Miss";
alert(message);
```
</details>

<hr>

**Exercise 3:** Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "`+`", "`-`", "`*`", "`/`". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. You can use the `Number.isNaN` method to check if you get the correct number after conversion. For example, calling `Number.isNaN(10)` will return `false`, while `Number.isNaN(NaN)` will return `true`.

<details>
<summary>Sample Solution</summary>

```javascript
let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);
```
</details>