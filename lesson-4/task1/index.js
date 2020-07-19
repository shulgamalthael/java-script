function sumTo(n) {
    let sum = 0;
    for (let i = 100; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert( sumTo(200) );