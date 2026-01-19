# Estimated time
15-30 minutes

# Level of difficulty
Easy

# Objectives
Familiarize the student with:

- interacting with the user (dialog boxes – alert, confirm, prompt).

# Scenario

Let's go back to our contact list. After some recent tweaks (i.e. using an array and objects) it is actually starting to look like a list. However, one quite serious problem remained. Changing data in the list, such as adding a new contact, has to be provided for right away in the program code. What if we want to give the user the ability to enter the data of the added contact while the program is running?

Modify the program to add, at the end of the list, not the contact, which is given in the code, but the one which the user will give during the program run. Use the `prompt()` method to do this. At the end, display the first and the last contact from the list.

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

// write your code here


let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
```

<details>
<summary>My solution</summary>

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

let newname = prompt("Name of new contact:", "John Doe");
let newphone = prompt("Phone of new contact:");
let newmail = prompt("Email of new contact:");

contacts.push({name : newname, phone : newphone, email : newmail});

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
```
</details>