class Wallet {

        balance = 0;

    getBalance() {
        return this.balance;
    }

    deposite(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if ( amount > balance) {
            console.log('No enough funds');
            return;
        }
        this.balance -= amount;
    }
};

const walletUsr = new Wallet();

export { Wallet };