# Operators

Operators can be symbols or names that perform certains actions on arguments, called **operands**.

Operands can be both values and variables. They can be distinguished in various way.

## By number of operands

- Unary: when they have only one operand. For example, `typeof`.
- Binary: when they have 2 operands. For example, `+`.
- Ternary: when they have 3 operands. There is only one of them, and will be discussed later.

## By position

- Prefix operators: put before the operand.
- Suffix operators: put after the operand.
- Infix operators: put between operands.

## By context

Most common way to distinguish them. This is also the one we will use.

- Assignment operators
- Arithmetic operators
- Logical operators
- Conditional operators

Some operators can also be interpreted differently depending on the context.

# Assignment operators

Operators that allow the assignment of values to variables or constants. The basic operator for this is `=`, which assign the value on its right to the value of the right operand to the left operand. 

If several assignment operators appear in a row, the assignment works from right to left.

```javascript
let year = 2050;
let newYear = year = 2051;
```
Is the same as:

```javascript
let year = 2050;
year = 2051;
let newYear = year;
```

In addition to the basic assignment operator, there are also assignment operators connected to arithmetic, logicla and string operators.

# Arithmetic operators

These express mathematical operations. They accept numerical values and variables. All arithmetic operators, except addition, implicitly convert values to the Number type before performing the operation.

The addition operator will convert both operands to a string if one of them is a string.

JavaScript respects the order of parentheses, therefore it's a good habit to use them to force precedence and order of operations, because the one used by the interpreter may not always be the mathematical one.

The basic operators are:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Division remainder: `%`
- Power: `**`

Example:

```javascript
const x = 5;
const y = 2;
 
console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25
```

## Unary arithmetic operators

There are various unary arithmetic operators. Among them, there are also `+` and `-`. Both of these convert operands to the Number type and `-` also turns them negative.

Example:

```javascript
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
 
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number
```

## Unary increment and unary decrement

These operators can be used either as prefix or suffix.

- Unary increment: `++`
- Unary decrement: `--`

When used as suffix, they return the value then increase or decrease the value.
When used as prefix, they increase or decrease the value, then return the value.

Example:

```javascript
let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19
```

More detailed:

```javascript
console.log(n1++);

// is interpreted as

console.log(n1);
n1 = n1 + 1;

// meanwhile

console.log(++n1);

// is interpreted as

n1 = n1 + 1;
console.log(n1);
```

Keep also in mind that a lot of operations with the Number type introduce floating-point errors:

```javascript
console.log(0.2 + 0.1); // 0.30000000000000004
console.log(0.2 * 0.1); // 0.020000000000000004
console.log(0.3 / 0.1); // 2.9999999999999996
```

The numbers will be precise for integers up to 252. Most fractions will not be precise. We will discuss how to mitigate this problem with comparison operators.

# Compound Assignment operators

Binary arithmetic operators can be combined with the assignment operator, resulting in:

- Addition assignment: `+=`
- Subtraction assignment: `-=`
- Multiplication assignment: `*=`
- Division assignment: `/=`
- Remainder assignment: `%=`
- Power assignment: `**=`

These operators take the value of the receiving variable (left operand), perform the specified operation with the right operand, then assigns the resulting value to the left operand.

Example:

```javascript
let x = 10;
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4
```

# Logical operators

They work with Boolean type values (`true` and `false`). They have the same meaning as their mathematical counterparts. They are:

- AND: `&&` (Binary)
- OR: `||` (Binary)
- NOT: `!` (Unary)

We can, as usual, create complex boolean equations. There is a priority, which is:

1. NOT: `!`
2. AND: `&&`
3. OR: `||`

We can use parentheses to change the precedence.

# Logical operators with non-Boolean variables

Logical operators can also be used with non-Boolean types.

## NOT

Easiest case to look at is NOT. At first, the operand is turned into a Boolean type using the logic explained in section [Conversion to Boolean](../2.1%20-%20Primitive%20Data%20Types,%20Conversions/01%20-%20Concepts.md##Conversion%20to%20Boolean), then the operator goes into play, returning either `true` or `false`.

Usually, if we want to turn a value into a Boolean, we double-negate it.

## AND and OR

They don't return boolean values. They return either the first or second operand.

- AND will return the first operand if it evaluates to `false`. It returns the second if it evaluates to `true`
- OR will return its first operand if it evaluates to `true`. It returns the second if it evaluates to `false`

The "evaluation" mentioned is simply an attempt to convert an operand into a Boolean type according to the rules we have mentioned.

Both operators also use **short-circuit evaluation**:

- If the first operand of AND (`&&`) is `false`, it will be returned and no other check will be made.
- If the first operand of OR (`||`) is `true`, it will be returned and no other check will be made.

This can make execution faster, but has a side effect, visible in this example:

```javascript
let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0
```

As we can see, `y++` will never be executed.

**Logical operators** are usually used together with **conditional operators**, and they are especially useful in **conditional instructions** (decision making) and in **loops** (loop-ending conditions).

# Compound Assignment Operators

Like arithmetic operators, Binary Logical Operators can be used in combination with the assignment operator `=`, creating:

- Logical AND Assignment: `&&=`
- Logical OR Assignment: `||=`

The instruction `a &&= false` means exactly the same as `a = a && false`.

The operation `b ||= true` is interpreted as `b = b || true`.

Example:

```javascript
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true
```
