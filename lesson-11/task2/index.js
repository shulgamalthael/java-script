const contacts = [{
    name: "William",
    phoneNumber: "555-55-55"
},
{
    name: "Kate",
    phoneNumber: "444-44-44"
},
{
    name: "Sam",
    phoneNumber: "333-33-33"
},
{
    name: "Alex",
    phoneNumber: "222-22-22"
},
{
    name: "Linda",
    phoneNumber: "111-11-11"
}
];

const direction = true;

const sortContacts = (contacts, isAsc) => {
if (!Array.isArray(contacts)) {
    return null;
}
const result = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
if (isAsc === false) {
    contacts.sort((a, b) => {
        return b.name.localeCompare(a.name)
    });
}
return result;
};

console.log(sortContacts(contacts, direction));