# String operators

The only operator of this kind is **concatenation** `+`. This operator will convert every operand into a String type if any of them is a String. It will then create a new String by attaching the right operand to the end of the left.

## Compund assignment operators

Like arithmetic operators, you can use `+=` to concatenate left and right operand, and assign the result to the left.

Example:

```javascript
let sentence = "Happy New ";
sentence += "Year ";
sentence += 10191;
console.log(sentence); // -> Happy New Year 10191
```

# Comparison operator

Used to check equality or inequality of values. They are all binary, and all of them return a logical value (`true` or `false`) based on the result of the comparison.

If the type of the operands are different, JavaScript will try to convert the values. When checking (in)equalities, the operands will be converted to Number in most cases. There are two exceptions to this: `String` types and strict equality (**identity**) operator.

Strings are compared `char` by `char` (precisely, Unicode character by Unicode character).

To check if operands are equal, we can use the **identity** operator `===` or the **equality** operator `==`.

## Identity

Identity is more restrictive and, to return `true`,  the operands must have both same value and samy type.

Example:

```javascript
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false
```

## Equality

Equality operator requires only that the operands have the same value, ignoring types. If the operands are of different types, the interpreter will try to convert them to numbers. For example:

- `false` &rarr; `0`
- `true` &rarr; `1`
- `undefined` &rarr; `NaN`
- `null` &rarr; `0`
- `10n` &rarr; `10`
- `"123"` &rarr; `123`
- etc...

If any of the operands has the `NaN` value, or has been converted to it, the equality operator `==` will return `false`, always.

Example:

```javascript
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false
```

**Important:** use the **Identity** operator `===` unless you want to intentionally allow positive comparison between different types.

## Complementary equality operators

There are also the **Nonidentity** operator `!==` and the **Inequality** operator `!=`.

**Nonidentity** returns `true` if the operands are not identical. Which means they have different values or they may have the same value, but different types

**Inequality** returns `true` if the operands have different values.

Example:

```javascript
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true
```

## Inequality operators

These operators allow us to check if one operand is greater than (`>`), smaller than (`<`), greater or equal to (`>=`), smaller or equal to (`<=`) the other operand.

They work with any data type, but make the most sense if used only with Number types or values that will correctly convert to numbers.

Example:

```javascript
console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
 
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
 
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true
```

It's also possible to use them for strings not representing numbers, though the algorithm for this is complex and not very useful. Generally, single characters at the same position of both strings are compared.

The value correspond to their positions in the alphabet, and it's also defined this way: lowercase > uppercase > digits.

Example:

```javascript
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true
 
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
 
console.log("ab" < "ab4"); // -> true
```

**Note:** the symbol `=>` exists in JavaScript, but is not an operator. We use it in the construction of arrow functions.

# Other operators

There are a lot of operators in JavaScript, but many of them are not useful for now, like the bitwise operators. Some of those that are worth mentioning are listed here.

## `typeof`

Unary operator which checks the type of the operand. Will return a string with the type name.

```javascript
let year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean
```

## `instanceof`

Binary operator that checks if the Object (left operand) is of a specific Type (right operand). Returns `true` or `false`.

```javascript
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false
```

## `delete`

Unary operator which allows to delete a selected field of an Object, whose name is indicated with an operand.

```javascript
let user = {
     name: "Alice",
     age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined
```

## `ternary`

The only ternary operator in JavaScript, it's a conditional operator. It is mostly used to place one of two values in a variable, depending on certain conditions. We will look at it better during the evaluation of the conditional if.

Based on the boolean value of the first operand (`true` or `false`), it returns the value of either the second operand if `true`, or the third operand if `false`. The first two operands are separated by `?` and the second and third by `:`.

Example:

```javascript
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob
```

Each of these operands could be an expression that has to be calculated. In the following example, the first operand is a comparison of two numbers using a comparison operator. The result of the comparison will be false, which will be used by the conditional (ternary) operator.

```javascript
let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob
```

Here we come to an important problem about operator precedence and order of execution. In a moment, we will say a few more words about it.

# Precedence

In all the examples where we presented the operation of successive operators, we followed instructions in which one operator was used. In reality, usually multiple operators are used simultaneously. At this point, an important question arises: in what order will the interpreter perform them? This will, of course, affect the final result of the operators, so it is worth taking this into account when writing the instructions.

Given:

```javascript
let a = 10;
let b = a + 2 * 3;
let c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false
```

In the second line of the example (variable b declaration), the operators are executed in the order we know from mathematics.

1. First, multiplication is performed
2. Then addition
3. And at the end the resulting value is assigned to the variable.

In the third line (declaration of variable c) the matter gets a little more complicated.

1. First, the sum of variable a and number 2 is calculated
2. Then the sum of numbers 20 and 15
3. Both results are compared with the logical operator (less than) and the result is placed in variable c.

## Explaination

The JavaScript interpreter uses two operator properties to determine the sequence of operations: **precedence** and **associativity**.

- **Precedence** can be treated as a priority, with some operators having the same precedence (e.g. addition and subtraction).
- **Associativity** allows you to specify the order of execution if there are several operators with the same priorities next to each other.

Precedence can be presented as a numerical value: the higher the value, the higher the priority of the operation. If, for example, an ***OP<sub>1</sub>*** operator has a smaller precedence than ***OP<sub>2</sub>*** , then the instruction:

<p align="center">
<i>a <b>OP<sub>1</sub></b> b <b>OP<sub>2</sub></b> c</i>
</p>

will be executed as follows: first, ***OP<sub>2</sub>*** will be executed on operands *b* and *c*, then ***OP<sub>1</sub>*** will be executed on the left operand a and the right operand, resulting from OP2. So the instruction could be presented in the form:

<p align="center">
<i>a <b>OP<sub>1</sub></b></i> ( <i>b <b>OP<sub>2</sub></b></i> ) <i> c </i>
</p>

<hr>

If we perform the same operations (or different operations but with the same precedence), the interpreter uses associativity to determine the order of operations. Operators may have a specified left-associativity (left to right order) or right-associativity (right to left order). Let's assume that in our example, the operator ***OP<sub>1</sub>*** has left-associativity:

<p align="center">
<i>a <b>OP<sub>1</sub></b> b <b>OP<sub>1</sub></b> c</i>
</p>

In such a situation, the ***OP<sub>1</sub>*** operation on operands *a* and *b* will be performed first, followed by a second ***OP<sub>1</sub>*** operation on the received result and operand *c*. Bearing in mind that we are dealing with left-associativity, we could write the instruction in the following form:

<p align="center">
( <i>a <b>OP<sub>1</sub></b> b </i> ) <i><b>OP<sub>1</sub></b> c </i>
</p>

It follows that it would be appropriate to know not only the precedence of all operators, but also their associativity. This may seem a bit overwhelming, taking into account the number of operators.

## Table of Precedence

Fortunately, it is usually enough to know the properties of the most basic operators and use brackets in doubtful situations. The brackets allow you to impose the order of operations, just like in mathematics. Keep this in mind when viewing the table below.

It contains a list of operators we already know with their precedence and associativity, so it is quite large. You absolutely do not have to remember everything if you can use brackets to group operations.

<table>
  <thead>
    <tr>
      <th>Precedence</th>
      <th>Operator</th>
      <th>Associativity</th>
      <th>Symbol</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>14</td>
      <td>Grouping</td>
      <td>n/a</td>
      <td>( ... )</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Field access</td>
      <td>⇒</td>
      <td>... . ...</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Function call</td>
      <td>⇒</td>
      <td>... ( ... )</td>
    </tr>
    <tr>
      <td rowspan="2">11</td>
      <td>Postfix increment</td>
      <td>n/a</td>
      <td>... ++</td>
    </tr>
    <tr>
      <td>Postfix decrement</td>
      <td>n/a</td>
      <td>... --</td>
    </tr>
    <tr>
      <td rowspan="7">10</td>
      <td>Logical NOT</td>
      <td>⇐</td>
      <td>! ...</td>
    </tr>
    <tr>
      <td>Unary plus</td>
      <td>⇐</td>
      <td>+ ...</td>
    </tr>
    <tr>
      <td>Unary negation</td>
      <td>⇐</td>
      <td>- ...</td>
    </tr>
    <tr>
      <td>Prefix increment</td>
      <td>⇐</td>
      <td>++ ...</td>
    </tr>
    <tr>
      <td>Prefix decrement</td>
      <td>⇐</td>
      <td>-- ...</td>
    </tr>
    <tr>
      <td>typeof</td>
      <td>⇐</td>
      <td>typeof ...</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>⇐</td>
      <td>delete ...</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Exponentiation</td>
      <td>⇐</td>
      <td>... ** ...</td>
    </tr>
    <tr>
      <td rowspan="3">8</td>
      <td>Multiplication</td>
      <td>⇒</td>
      <td>... * ...</td>
    </tr>
    <tr>
      <td>Division</td>
      <td>⇒</td>
      <td>... / ...</td>
    </tr>
    <tr>
      <td>Remainder</td>
      <td>⇒</td>
      <td>... % ...</td>
    </tr>
    <tr>
      <td rowspan="2">7</td>
      <td>Addition</td>
      <td>⇒</td>
      <td>... + ...</td>
    </tr>
    <tr>
      <td>Subtraction</td>
      <td>⇒</td>
      <td>... - ...</td>
    </tr>
    <tr>
      <td rowspan="5">6</td>
      <td>Less than</td>
      <td>⇒</td>
      <td>... &lt; ...</td>
    </tr>
    <tr>
      <td>Less than or equal</td>
      <td>⇒</td>
      <td>... &lt;= ...</td>
    </tr>
    <tr>
      <td>Greater than</td>
      <td>⇒</td>
      <td>... &gt; ...</td>
    </tr>
    <tr>
      <td>Greater than or equal</td>
      <td>⇒</td>
      <td>... &gt;= ...</td>
    </tr>
    <tr>
      <td>instanceof</td>
      <td>⇒</td>
      <td>... instanceof ...</td>
    </tr>
    <tr>
      <td rowspan="4">5</td>
      <td>Equality</td>
      <td>⇒</td>
      <td>... == ...</td>
    </tr>
    <tr>
      <td>Inequality</td>
      <td>⇒</td>
      <td>... != ...</td>
    </tr>
    <tr>
      <td>Strict Equality</td>
      <td>⇒</td>
      <td>... === ...</td>
    </tr>
    <tr>
      <td>Strict Inequality</td>
      <td>⇒</td>
      <td>... !== ...</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Logical AND</td>
      <td>⇒</td>
      <td>... &amp;&amp; ...</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Logical OR</td>
      <td>⇒</td>
      <td>... || ...</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Conditional (ternary)</td>
      <td>⇐</td>
      <td>... ? ... : ...</td>
    </tr>
    <tr>
      <td rowspan="4">1</td>
      <td rowspan="4">Assignment</td>
      <td rowspan="4">⇐</td>
      <td>... = ...</td>
    </tr>
    <tr>
      <td>... += ...</td>
    </tr>
    <tr>
      <td>... *= ...</td>
    </tr>
    <tr>
      <td>... and other assignment operators</td>
    </tr>
  </tbody>
</table>

<p><strong>Legend:</strong></p>
<ul>
  <li>⇒ = Left-to-right associativity</li>
  <li>⇐ = Right-to-left associativity</li>
  <li>n/a = Not applicable</li>
</ul>

A few words of explanation about the table.

The abbreviation n/a means not applicable, because in some operators the term associativity does not make sense.

At the very beginning of the table, there are three operators that may need further explanation:

- **Grouping** is simply using the brackets ` ( ) `. They take precedence over the other operators, so we can use them to force the execution of operations to take priority;

- **Field access (member access)** is the operator used in dot notation, which is when accessing a selected object field. It takes precedence over other operators (except for brackets), so for example the instruction
`let x = myObject.test + 10;` means that the value of the test field of the `myObject` object will be fetched first, then we will add a value of 10 to it, and the result will go to the x variable;

- **Function call** precedence tells us that if we call a function, this action will take priority over other operations, except for grouping in brackets and the field access operator (dots). So in the example
`let y = 10 + myFunction() ** 2;`, `myFunction` will be called first, the result returned by it will be raised to power 2, and only then we will add 10 to the total and save the result to variable y.

Remember, however, if you have any doubts, just use brackets to order the precedence of the operators used.

Example:

```javascript
let a, b;
b = (a = (20 + 20) * 2) > (3 ** 2);
console.log(a); // -> 60
console.log(b); // -> true
```

The use of parentheses not only forces the order of actions, but also increases the readability of the code.

The full list of operators and properties can be found on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) [pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators).