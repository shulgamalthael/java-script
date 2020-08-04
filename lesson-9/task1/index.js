const getAdults = userObj => {
    let usersArray = Object.key(userObj)
    const filteredUsersArray = usersArray
    .filter(user => user[1] >= 18);
    const usersNames = filteredUsersArray.map(user => user[0]);
    return usersName;
}

const user = {
    'Tom': 17,
    'John Doe': 19,
    'Bob': 18,
};