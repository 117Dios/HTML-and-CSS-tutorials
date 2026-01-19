"use strict";

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

let execution = true;
let message = "Display the first contact (first)\n"
            + "Display the last contact (last)\n"
            + "Display all contacts (all)\n"
            + "Add a new contact (new)\n"
            + "Exit the program (quit)";

while (execution) {
    let input = prompt(message);

    if (input === "quit"){
        execution = false;
        break;
    }

    switch (input) {
        case "first":
            {
                alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            }
            break;
        case "last":
            {
                let last = contacts.length - 1;
                alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            }
            break;
        case "all":
            {
                for ( let i = 0; i < contacts.length ; i++){
                    alert(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                }
                
            }
            break;
        case "new":
            {
                let newname = prompt("Insert new contact name:");
                let newphone = prompt("Insert new contact phone:");
                let newemail = prompt("Insert new contact email:");

                contacts.push({name : newname, phone : newphone, email : newemail});

            }
            break;
        default:
            break;
    }
    
}