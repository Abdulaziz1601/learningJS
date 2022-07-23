function* genFunction() {
    console.log("Running");
    yield "paused";
    console.log("running again...");
    return 'stopped';
}

let genObject = genFunction();

console.log(genObject.next());
console.log(genObject.next());

// generators are also iterables

function* abcs() {
    yield 'a';
    yield 'b';
    yield 'c';
}

for (const letter of abcs()) {
    console.log(letter.toUpperCase());
}

console.log([...abcs()]);