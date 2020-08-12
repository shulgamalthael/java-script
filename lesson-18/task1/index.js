'use strict';

const event= {
    guests: [
        { name: 'Alex', email: 'exemple@server.com', age: 17 },
        { name: 'Tom', email: 'exemple@server.com', age: 18 },
        { name: 'John', email: 'exemple@server.com', age: 18 },
    ],
    message: 'Welcome to the party',
    getInvintations() {
        return this.guests

        .filter(({ age }) => age >= 18)
        .map(({ name, email }) => ({
            text: `Dear ${name}!${this.message}!`,
            email
        }));
    }
};

console.log(event.getInvintations());