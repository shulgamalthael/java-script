//input: array of strings, array of objects
//outside: array objects

//elgo
//1. map array of objects

// const markAdmins = (users, adminsId) => {
//     users.map(function(users) {
//         return { ...user, isAdmin: adminsId.includes(user, id) };
//     });
// };

const markAdmins = (users, adminsId) => {
    users.map = (users => 
        ({ ...user, isAdmin: adminsId.includes(user, id) }));
}

//result

const adminsId = ['1','3'];
    const users = [
        { id='1', name='Tom' },
        { id='2', name='John' },
        { id='3', name='Mike' },
        { id='4', name='line' },
    ];

console.log(markAdmins(users, adminsId));