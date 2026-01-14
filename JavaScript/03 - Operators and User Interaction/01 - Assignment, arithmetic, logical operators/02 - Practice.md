# Arithmetic Operators

**Exercise 1:** Fill in the missing operators to get the expected result (replace the underscore symbol with the appropriate operator):

```javascript
console.log(2 _ 3 _ 1);      // expected 7
console.log(2 _ 4);       // expected 16
console.log(5 _ 1);       // expected 5
console.log(8 _ 2 _ 5 _ 2); // expected 39
```

<details>
<summary>Sample Solution</summary>

```javascript
console.log(2 * 3 + 1);
console.log(2 ** 4);
console.log(5 * 1);
console.log(8 ** 2 - 5 ** 2);
```
</details>

# Comparison operators

**Exercise 2:** Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):

```javascript
console.log(4 * 5 _ 20);
console.log(6 * 5 _ "30");
console.log(-17 _ 0);  
console.log(25 _ 1);  
console.log(2 + 2 * 2 _ 4);
```

<details>
<summary>Sample Solution</summary>

```javascript
console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);  
console.log(25 > 1);  
console.log(2 + 2 * 2 != 4);
```
</details>

# Logical Operators

**Exercise 3:** Fill in the missing comparison operators in that such a way that all expressions result in true (replace the underscore symbol with the appropriate operator):

```javascript
console.log(true _ false);  
console.log(false _ false);  
console.log(false _ false _ true);  
console.log(true _ false _ false && true);
```

<details>
<summary>Sample Solution</summary>

```javascript
console.log(true || false);  
console.log(false || !false);  
console.log(false || false || true);  
console.log(true || false && false && true);
```
</details>