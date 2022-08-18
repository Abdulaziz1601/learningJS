const obj = {
    name: 'Vladilen',
    age: 20,
    job: 'FullStack'
};

const entries = [
    ['name', 'Vladilen'],
    ['age', 20],
    ['job', 'FullStack']
];

// Object can be transported to arr, or reverse

// console.log(Object.entries(obj));

// console.log(Object.fromEntries(entries));


// Map

const map = new Map(entries);

console.log(map.get('name')); // same as obj.name

// We can assign as a key any dataType

map
    .set('newField', 42)
    .set(obj, 'ValueOfObj') // as a key we are assigning obj object
    .set(NaN, 'Nani ?!');

// Deleting field

// map.delete('job');

// console.log(map.has('job')); // To know if element exists

// console.log(map.size); // to know how many elements are in map

// // To delete all elements from map
// map.clear();

// console.log(map.size);


// for (let [key, value] of map.entries()) {
//     console.log(key, value);
// }

// // This returns us only values 
// for(let val of map.values()) {
//     console.log(val);
// }

// This returns us only keys
// for (const key of map.keys()) {
//     console.log(key);
// }

map.forEach((val, key,) => {

});

const words = 'ABCDEFGH ABCDEFG AxBCDEF ABCDxE EDCBCAABCD'.split(' ');

let arr = [];
const foo = (s1, s2, i) => {
    let acc = '';
    while (s1[i] === s2[i] && i < s2.length) {
        acc += s2[i++];
    }

    return acc;

}


for (let i = 0; i < words[1].length; i++) {
    if (words[0].indexOf(words[0 + 1]) !== -1) {
        arr.push(foo(words[0], words[0 + 1], words[0].indexOf(words[0 + 1][i])));
    }
}
console.log(arr);
let ans = arr.filter(el => el.length === Math.max(...arr.map(el => el.length)))[0];
arr = [];
console.log(ans)

for (let k = 2; k < words.length; k++) {
    let arr = [];
    const foo = (s1, s2, i) => {
        let acc = '';
        while (s1[i] === s2[i] && i < s2.length) {
            acc += s2[i++];
        }

        return acc;
    }

    for (let i = 0; i < words[k].length; i++) {
        if (ans.indexOf(words[k][i]) !== -1) {
            arr.push(foo(words[k], ans, words[k].indexOf(ans[i])));
        }
    }

    ans = arr.filter(el => el.length === Math.max(...arr.map(el => el.length)))[0];
    arr = [];
    console.log(ans)
}
