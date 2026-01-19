# Estimated time
30-60 minutes

# Level of difficulty
Easy/Medium

# Objectives
Familiarize the student with:

- conditional execution (what is conditional execution, the if–else statement, the conditional operator, the switch–case statement)

# Scenario

During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further.

Try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

- Showing the first contact (first)
- Showing the last contact (last)
- Adding a new contact (new)

When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.

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

// Insert your code here
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

let message;

let choice = prompt("Write 1 to show the first contact.\nWrite 2 to show the last contact.\nWrite 3 to add a contact");

switch (choice) {
    case "1":
        message = `${contacts[0].name}/${contacts[0].phone}/${contacts[0].email}`;
        break;
    case "2":
        last = contacts.length - 1;
        message = `${contacts[last].name}/${contacts[last].phone}/${contacts[last].email}`;
        break;
    case "3":
        let newname = prompt("Insert name:");
        let newphone = prompt("Insert phone:");
        let newemail = prompt("Insert email:");
        if (newname && newphone && newemail) {
            contacts.push({name : newname, phone : newphone, email : newemail});
            message = "Contact added";
            break;
        }
        message = "One of the entries is missing";
        break;
    default:
        message = "Invalid choice";
}

alert(message);
```
</details>