export const event= {
    guests: [
        { name: 'John', email: 'exemple@server.com', age: 18 },
    ],
    message: 'Welcome to the party',
    getInvintations() {
        return this.guests

        .filter(({ age }) => age >= 18)
        .map(({ name, email }) => ({
            text: `Dear ${name}! ${this.message}!`,
            email
        }));
    }
};

console.log(event.getInvintations());