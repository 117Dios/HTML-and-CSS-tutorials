# Estimated time
30-45 minutes

# Level of difficulty
Medium

# Objectives
Familiarize the student with:

- Function basics (what are functions, declaring functions, calling functions, local variables, the return statement, function parameters, shadowing);
- Functions as first-class members (function expressions, passing a function as a parameter, callbacks);
- Arrow functions (declaring and calling);
- Recursion (basic idea).

# Scenario
Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

- `showContact`: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the `instanceofArray` construction for this);
- `showAllContacts`: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
- `addNewContact`: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.

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

function showContact(contacts, index){
    
    if (!(typeof index == "number") || isNaN(index) || index >= contacts.length){
        return "Malformed index value.";
    }

    return `${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`;
}

function showAllContacts(contacts){

    if ( !(contacts instanceof Array)){
        console.log("Contacts is not an array.");
    }

    for (let i = 0; i < contacts.length; i++){
        console.log(showContact(contacts,i));
    }
}

function addNewContact (contacts, newname, newphone, newemail){
    if ( !(contacts instanceof Array)){
        return console.log("Contacts is not an array.");
    }
    if (!newname || !newphone || !newemail){
        return console.log("No value entered.");
    }

    contacts.push({name : newname, phone : newphone, email : newemail});

}

addNewContact(contacts, "abc", "123", "abc");
addNewContact(contacts, "abc", "", "abc");

showAllContacts(contacts);
showAllContacts(3);

console.log(showContact(contacts, 3));
console.log(showContact(contacts, "a"));
```
</details>