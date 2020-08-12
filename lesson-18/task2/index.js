//wallet - заимствование метода

const wallet = {
    transaction: [1, 2, 3],
    getMax() {
       return Math.max(...this.transaction);
    },
    getMin() {
        return Math.min(...this.transaction);
     },
};

// console.log(wallet.getMax());
// console.log(wallet.getMin());