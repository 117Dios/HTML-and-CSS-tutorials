***Exercise 1:*** Run the following code:

```javascript
let end = 2;
for(let i=1; i <= end; i++){
    console.log(i);
}
```

It should output the numbers `1` and `2` on the console. Use the debugger to make the program output the numbers `1`, `2`, `3`, `4`, and `5` instead. Do not modify the program code. Use only breakpoints and the option to modify variables.

<hr>

**Exercise 2:** Use the debugger to understand why the final result logged is equal to zero when on each iteration of `for`, a loop value of the variable `result` increases. Use `Watch` to track the changes in the selected variables.

```javascript
let counter = 0; 
let maxValue = 10; 
let result = 1; 
 
debugger; 
for (counter = 0; counter < maxValue; counter++) { 
    console.log(result); 
    result *= maxValue - counter - 1; 
} 
 
console.log("Final result: ", result);
```

<hr>

**Exercise 3:** Run the following code:

```javascript
function max(array) { 
    let maxValue = array[1]; 
    for(let i=1; i < array.length; i++){
        if(array[i] > maxValue) { 
            maxValue = array[i]; 
        } 
    } 
    return maxValue; 
} 
 
console.log( max([1, 4, 6, 2])); // -> 6 
console.log( max([10, 4, 6, 2])); // -> 6
```

The function max should return the largest number from the array given as an argument. As you can see, in the second case it works incorrectly: instead of the value `10` we get `6`. Using the debugger, trace the max function execution step by step. Observe the values of the `i` and `maxValue` variables. Locate the problem and fix the code so that it works correctly.