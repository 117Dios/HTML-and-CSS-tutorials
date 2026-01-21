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
