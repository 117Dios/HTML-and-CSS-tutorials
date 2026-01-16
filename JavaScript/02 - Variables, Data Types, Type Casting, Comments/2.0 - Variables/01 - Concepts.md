# Initializing variables
- ```var```: initializes a variable, and a variable can be re-declared with the same name.

- ```let```: initializes a variable. Throws a SyntaxError if another variable is declared with the same name.

```let``` is the most used.

# Strict interpreter
Always start a JavaScript document with:

```javascript
"use strict;"
```

So that it behaves according to modern standards.

### Example

Without use strict:

```javascript
height  =  180;
console.log(height);  //  ->  180
```

With use strict:

```javascript
"use  strict";
   
height  =  180;  //  ->  Uncaught  ReferenceError:  height  is  not  defined
console.log(height);
```

# Scope

If ```let``` and ```const``` are declared outside of code blocks (defined by `{ }` ) are global. If created inside code blocks or functions, they're local.

Instead, ```var``` will be global inside code blocks, but local in a function.

# Functions

Declared as:

```javascript
function nameOfFunction(){
    // code
}
```

# Variable Shadowing

A local variable can be declared with the same name as a global variable, making the latter "invisible" to the code block (even if nested) or function. Not the best practice.

# Variable Hoisting

JavaScript's interpreter declares, but does NOT initialize, a variable at the start of the program if its global, at the start of the block if it's a local ```let``` or at the start of the function if it's a local ```var```. This has no effect on the code, it happens all in the memory of the interpreter.

It works differently with ```let``` and ```const```, but we won't go into detail. We should just be aware that it happens. Best practice is declaring and initializing a variable before usage **always**.

Example 1 - variable not declared:

```javascript
var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined
```

Example 2 - variable declared and initialized after being used:

```javascript
var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  undefined
var  weight  =  70;
console.log(weight);    //  ->  70
```
