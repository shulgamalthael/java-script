const dayTransactions = [
    { userid: 22, amount: 60, operation: 'sell'},
    { userid: 22, amount: 160, operation: 'buy'},
    { userid: 44, amount: 90, operation: 'sell'},
];

function getTotalRevenue(dayTransaction) {
      return dayTransaction.map((el) => el.amount).reduce((a, b) => a + b, 0);
}console.log(getTotalRevenue(dayTransaction));