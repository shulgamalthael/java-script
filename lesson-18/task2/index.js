//wallet - заимствование метода

const wallet = {
    transaction: [- 100, 1, 2, 3, 100],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
};

export { wallet } ;

// console.log(wallet.getMax());
// console.log(wallet.getMin());