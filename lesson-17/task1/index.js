const user = {
    firstName: 'Roland',
    lastName: 'Diskein',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }
};

export user.getFullName();

// console.log(user.getFullName());