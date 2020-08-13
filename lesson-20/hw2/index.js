class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
};

// const user = new User('1', 'Tom', 'session-id');
// console.log(user._id); //////1
// console.log(user._name); ///// Tom
// console.log(user._sessionId); ///// sessionId

class UserRepository {
    constructor(users) {
        // super(id, name, sessionId, users)
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map(pers => pers._name);
    }

    getUserIds() {
        return this._users.map(pers => pers._id);
    }

    getUserNameById(id) {
        for (let pers of this._users) {
            console.log(this._users)
            if (pers.id === id) {
                console.log(pers)
                return pers.name;
            }
        }
    }
};

const usersArr = new User(`${Math.random()}`, 'Tokyo', '50000');

console.log(usersArr);

const getUsersData = new UserRepository(['Nikita', 'Shulha', 'Alexandrovich', 'Emergence']);

console.log(getUsersData);
console.log(getUsersData.getUserNames());
console.log(getUsersData.getUserIds());
console.log(getUsersData.getUserNameById());

export { User, UserRepository };