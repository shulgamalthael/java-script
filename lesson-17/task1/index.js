const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }
};

user.getFullName();

export { user };

// console.log(user.getFullName());