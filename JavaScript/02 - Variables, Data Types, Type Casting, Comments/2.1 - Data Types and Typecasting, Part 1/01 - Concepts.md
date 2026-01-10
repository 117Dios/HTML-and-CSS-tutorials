# Operator: `typeof`

`typeof` is unary (takes only one argument) and returns a string that tells the data type of the given argument.

Example:

```javascript
let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
   
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string
```

<hr><hr>

# Primitive data types

## Boolean

Can be `true` or `false`. Can be used as a flag to check for something. The variable name is usually preceded by "is" when used like this.

## Number

Represents both integers and real numbers. For correctness of calculations, integer values should be limited to the range of [-(2<sup>53</sup>-1), (2<sup>53</sup>-1)]

A number can also be represented in forms other than decimals, if using the appropriate prefix:

- `0x...`: hexadecimal
- `0o...`: octal
- `0b...`: binary

We can also write exponential numbers:

- 9000 &rarr; `9e3`
- 0.00123 &rarr; `123e-5`

There are also `Infinity`, `-Infinity` and `NaN` for "Not a Number" (Type of error)

## BigInt

Not used often, but allows to use integers of virtually any length. Can be used for all the operations of a normal integer, but during the division the result will **always** be rounded down to the nearest integer.

BigInt variables can only be used with other BigInts in operations. Using a Number will result in a TypeError.

BigInt does not have an equivalent of `Infinity`, `-Infinity`and `NaN`. Instead, there will be an error.

BigInts are defined with the `n` suffix:

```javascript
let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n
```

# String

Defining a string with " allows us to use ' inside as a character. The opposite is also true.

You can also put " or ' as a character in a string that started with that symbol by using the escape character `\`. Any symbol used after the escape character will be treated as a character itseld, and not as something else. This is especially true if you simply want to write \\. To do that, you will write `//`.

Example:

```javascript
let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows
```

Arithmetic operations on String types that are not pure numbers will return the `NaN` error. If the string contains only a number, the operation will be succesfull and the type of the new variable, if declared and initialized this way, will be Number.
Example:

```javascript
let  path  =  "C:\\Windows"  -  "Windows";
console.log(path);  //  ->  NaN
   
let  test  =  "100"  -  "10";
console.log(test);  //  ->  90
console.log(typeof  test);  //  ->  number
```

The only exception is the addition `+`, which will try to concatenate the strings.

```javascript
let  path  =  "C:\\"  +  "Windows";
console.log(path);  //  ->  C:\Windows
   
let  test  =  "100"  +  "10";
console.log(test);  //  ->  10010
console.log(typeof  test);  //  ->  string
```