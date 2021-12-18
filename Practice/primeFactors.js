prime_factors = function (n) {
    const factorsArr = [];
    //your code here
    while (n % 2 == 0) {
        factorsArr.push(2);
        n = n / 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
        while (n % i == 0) {
            factorsArr.push(i);
            n = n / i;
        }
    }

    if (n > 2) {
        factorsArr.push(n);
    }

    return factorsArr;
};

console.log(
    prime_factors(12)
);

// Best Answer
const prime_factors = n => {
    const factors = [];
    for (let i = 2; i <= n; i++) {
        while (n % i == 0) {
            factors.push(i);
            n /= i;
        }
    }
    return factors;
}