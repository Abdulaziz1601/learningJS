// reduce

// let orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 325 },
//     { amount: 100 },
// ];


// const totalAmount = orders.reduce((sum, order) => {
//     console.log('sum and order', sum, order);
//     return sum + order.amount
// }, 0);

// console.log(totalAmount);

import fs from 'fs';

const output = fs.readFileSync('reduce.txt', 'utf-8')
    .trim()
    .split('\r\n')
    .map(line => line.split(' '))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        });
        return customers;
    }, {});
console.log(JSON.stringify(output, null, 2));