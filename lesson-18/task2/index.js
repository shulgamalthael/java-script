//wallet - заимствование метода

const wallet = {
    transaction: [1, 2, 3],
    getMax() {
       return Math.max.apply(wallet, this.transaction);
    },
    getMin() {
        return Math.min.apply(wallet, this.transaction);
     },
};

// console.log(wallet.getMax());
// console.log(wallet.getMin());