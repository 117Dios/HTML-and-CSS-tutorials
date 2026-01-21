# Estimated time
30-60 minutes

# Level of difficulty
Medium

# Objectives
Familiarize the student with:

- Function basics (what are functions, declaring functions, calling functions, local variables, the return statement, function parameters, shadowing);
- Functions as first-class members (function expressions, passing a function as a parameter, callbacks);
- Arrow functions (declaring and calling);
- Recursion (basic idea).

# Scenario
We will use the functions to add one more item of functionality. Arrays have a `sort` method that allows us to sort their elements. To this method, we pass a function which should compare two elements of the array and decide which one is smaller and which one is bigger. If the first element is smaller, the function returns a value less than zero, if they are equal it returns zero, and if the first is larger, it returns a value greater than zero. For example, the array:

```javascript
let numbers = [10, 50, 40, 20];
```

can be sorted in ascending order with a call:

```javascript
numbers.sort(function (a, b) {
     let retVal = 0;
     if (a > b) {
         retVal = 1;
     } else {
         retVal = -1;
     }
     return retVal;
});
```

or more simply:

```javascript
numbers.sort((a, b) => a - b);
```

Give the user the option to select a `sort` action from the list. When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.

```javascript
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}
```

<details>
<summary>My Solution</summary>

```javascript
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let sort_type = prompt("Write 1 to sort by name.\nWrite 2 to sort by phone\nWrite 3 to sort by email.");
let sort_style = prompt("Write 1 if you want to sort in ascending order.\nWrite 2 if you want to sort in descending order");

switch (sort_type){
    case "1":
        contacts.sort((a,b) => sort_style == "1" ? (a.name.localeCompare(b.name)) : (b.name.localeCompare(a.name)));
        break;
    case "2":
        contacts.sort((a,b) => sort_style == "1" ? (a.phone.localeCompare(b.phone)) : (b.phone.localeCompare(a.phone)));
        break;
    case "3":
        contacts.sort((a,b) => sort_style == "1" ? (a.email.localeCompare(b.email)) : (b.email.localeCompare(a.email)));
        break;
    default:
        console.log("Invalid sorting.");
}

for (let contact of contacts){
    console.log(contact);
}
```
</details>