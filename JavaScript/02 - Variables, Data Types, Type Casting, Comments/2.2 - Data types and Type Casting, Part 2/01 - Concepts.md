# Complex Data Types

We will only talk about objects and arrays.

## Object

There are various object types. The one we will discuss now will be the **Record** object. It is a collection of named fields (like a struct or dict in other languages). Each field has a `key` and an associated `value`. In JavaScript, these fields are called properties. The type of these properties can be different, and they are separated by commas. The fastest way to create an object type variable is with `{}`:

```javascript
let  testObj  =  {};
console.log(typeof  testObj);  //  ->  object
```

This object, however, is empty. No properties have been defined. Let's recreate it with values:

```javascript
let  testObj  =  {
	nr:  600,
	str:  "text"
};
```

One can reference a specific property with the dot notation, using its key to obtain the value:

```javascript
console.log(testObj.nr);  //  ->  600
console.log(testObj.str);  //  ->  text
```

Objects are useful when we need to store various types of information linked in some way to eachother. For example, if we want to group information about a specific user, one could generate various variables that each hold a type of information. These variables will be unorganized, and referencing them could be prone to errors. If we put them together with objects, though, we will have something like:

```javascript
let  user1  =  {
         name:  "Calvin",
         surname:  "Hart",
         age:  66,
         email:  "CalvinMHart@teleworm.us"
};
   
let  user2  =  {
         name:  "Mateus",
         surname:  "Pinto",
         age:  21,
         email:  "MateusPinto@dayrep.com"
};
```

We still need to properly name these objects, and it would be better to add them dynamically, but for now it will do.

If we need to reference information inside each object, we can do so with the dot notation. Even if they have the same keys, they will store different values. Properties can also be added or modified:

```javascript
console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557
```

And, in the same way, they can be deleted, using the `delete` operator:

```javascript
console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined
```

## Array

An Array can hold various types of variables, like Object. The difference is that arrays are ordered and store only the values, which have to be accessed via index, starting from 0.

The fastest way to create arrays is to initialize a variable with `[]`. Each element added to an array has to be separated by commas. Example:

```javascript
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
   
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined
```

Elements can be added to an array, in a way, by simply specifying the index, even if it creates empty gaps:

```javascript
let  animals  =  [];
console.log(animals[0]);  //  ->  undefined
   
animals[0]  =  "dog";
animals[2]  =  "cat";
   
console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat
```

An array can also hold other arrays, which do not have to be of the same length unlike some other programming languages.

```javascript
let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
   
let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia
```

# Usage of arrays

In the Object example from below, we had no way to add a new user once everything was declared. However, we can merge the usage of arrays and objects, creating an array to which we can freely add any new user object:

```javascript
let  users  =[  
         {
                 name:  "Calvin",
                 surname:  "Hart",
                 age:  66,
                 email:  "CalvinMHart@teleworm.us"
         },
         {
                 name:  "Mateus",
                 surname:  "Pinto",
                 age:  21,
                 email:  "MateusPinto@dayrep.com"
         }
];
   
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21
```

We now try to add a new user:

```javascript
users[2]  =  {
         name:  "Irene",
         surname:  "Purnell",
         age:  32,
         email:  "IreneHPurnell@rhyta.com"
   
}
   
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].name);  //  ->  Mateus
console.log(users[2].name);  //  ->  Irene
```

## Operator: `instanceof`

Regarding the Array type, the `typeof` operator does not distinguish between classes, so an array will be seen as an object by it. However, `instanceof` correctly shows that an object is an array.

`instanceof` is a two argument operator, which requires a variable or literal, and an object class, written as `variable instanceof Class`. Example:

```javascript
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
let  day  =  "Sunday";
   
console.log(typeof  days);  //  ->  object
console.log(typeof  day);  //  ->  string
   
console.log(days  instanceof  Array);  //  ->  true
console.log(day  instanceof  Array);  //  ->  false
```

# Array methods

## Length

This is used to get information about the length of the array.

```javascript
let  names    =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
names[5]  =  "Amelia";
console.log(names.length);  //  ->  6
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo",  
"Samuel",  undefined,  "Amelia"]
console.log(names[3]);  //  ->  Samuel
console.log(names[4]);  //  ->  undefined
console.log(names[5]);  //  ->  Amelia
```

## IndexOf

Used to search the array to locate a given value. It returns its index if found, or `-1` if not found. If more than one instance is present, only the index of the first one will be returned.

```javascript
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.indexOf("Mateo"));  //  ->  2
console.log(names.indexOf("Victor"));  //  ->  -1
```

## Push

Places the given element at the end of the array, increasing its length by 1.

```javascript
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
names.push("Amelia");
console.log(names.length);  //  ->  5
console.log(names);  //  -  >  ["Olivia",  "Emma",  "Mateo", "Samuel",  "Amelia"]
```

## Unshift

The given element is placed at the beginning of the array, shifting all previous elements one place to the right.

```javascript
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.indexOf("Mateo"));  //  ->  2
console.log(names.indexOf("Victor"));  //  ->  -1
```

## Pop

This method returns and removes the last element of the array, reducing its length by 1.

```javascript
let  names=  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
let  name  =  names.pop();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Samuel
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo"]
```

## Shift

Similar to `pop`, but the returned element is the first one of the array, and all the others are shifted to the left, reducing the array's length by 1.

```javascript
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
let  name  =  names.shift();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Olivia
console.log(names);  //  ->  ["Emma",  "Mateo",  "Samuel"]
```

## Reverse

Reverses the order of the elements in the array. The first becomes last and the last becomes first.

```javascript
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
names.reverse();
console.log(names);  //  ->  ["Samuel",  "Mateo",  "Emma", "Olivia"]
```

## Slice

Create a new array from selected elements of original array. The original array is unaffected. It takes either one or two integer arguments, representing the index(es).

The basic combinations are:

- one argument larger than zero – all elements from the index given as an argument to the end of the array are copied;
- two arguments larger than zero – the element from the index specified as the first argument to the element specified as the second argument are copied;
- two arguments, first positive, second negative – all elements from the specified index to the end of the array are copied, except for the specified number of the last elements (e.g. argument -3 means that we do not copy the last three elements)
- one negative argument – the specified number of the last elements are copied to the end of the array (e.g. -2 means that you copy the last two elements).

```javascript
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
let  n1  =  names.slice(2);
console.log(n1);  //  ->  ["Mateo",  "Samuel"]
   
let  n2  =  names.slice(1,3);
console.log(n2);  //  ->  ["Emma",  "Mateo"]
   
let  n3  =  names.slice(0,  -1);
console.log(n3);  //  ->  ["Olivia",  "Emma",  "Mateo"]
   
let  n4  =  names.slice(-1);
console.log(n4);  //  ->  ["Samuel"]
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
```

## Concat

Creates a new array by attaching elements of another array to the array calling the method. The originals arrays remain unaffected.

```javascript
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names.concat(  otherNames);
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel",  "William",  "Jane"]
```

Arrays will be discussed again in Loops and Functions.