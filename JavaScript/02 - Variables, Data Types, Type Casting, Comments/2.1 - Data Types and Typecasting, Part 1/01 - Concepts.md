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

## String

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

### String interpolation

As of 2015, string interpolation has been added to JavaScript. In this way, one can treat a character as a template, to use variables directly into the string. Backticks MUST be used. Not `"` or `'`, but `` ` ``

```javascript
let  country  =  "Malawi";
let  continent  =  "Africa";
   
let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.
```

## Undefined

An Undefined type has only one value: `undefined`.

This is the default value of every variable before initialization. It can also be assigned as a value, but it's better to use `null` in that case.

## Null

The `null` value is a primitive, but the type is *not* a primitive. It is associated to an object. It is usually asigned to complex variables and it means that the variable doesn't contain anything.

The `typeof` returns `"object"` when used on `null`.

Example:

```javascript
let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
   
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object
```

## Symbol

For now, we let this one be.

# Type Conversion

## Constructors

We can call constructor methods, without passing an argument, to create a primitive variable with the default value. BigInt, instead, requires an initial value.

```javascript
const  str  =  String();
const  num  =  Number();
const  bool  =  Boolean();
   
console.log(str);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false
   
const  big1  =  BigInt(42);
console.log(big1);  //  ->  42n
   
const  big2  =  BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
```

We can use these constructors with an argument in order to convert a variable from one type to another.

## Conversion to String

The value is converted directly into a String. Nothing surprising.

## Conversion to Number

Works as expected with strings that are actual numbers, using decimal or exponential notations, or special values like `NaN` or the values for infinity. To convert from a string to other notations, like octal, hex or binary, the forms we already have seen (`0o...`, etc...) must be used.

For any other String value, `NaN` is returned. Also:

- BigInt can be converted to Number, but if it's too big it will be truncated.
- Booleans will mapped as `true = 1` and `false = 0`.
- An undefined value will be `NaN`, a null value will be `0`.

It is also possible to use the unary `+` operator directly in front of a value to try to convert it to a Number. It would look something like `sum = 1 + +"2"`

## Conversion to Boolean

Booleans can have only two values: `true`or `false`. A Boolean will return `false` for:

- `0`
- `NaN`
- Empty string
- `undefined`
- `null`

Any other value will return `true`

## Conversion to BigInt

For this conversion, we require a Number or String representing a number. Values converted can be of decimal, octal, hex or binary notation. Exponential works only with Number types.

If any other value is passed, there will be a TypeError.

## Implicit Conversion

Conversions can also happen automatically. Remember that `+` concatenates strings if a string is present? Using `-` will try to subtract a number from a string, thus converting a string.

```javascript
const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number
```