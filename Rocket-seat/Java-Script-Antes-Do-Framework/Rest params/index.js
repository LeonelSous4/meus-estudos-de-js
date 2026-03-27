// Rest params (...) permite um numero indefinido de elementos como array
// ...rest ou ...args

function values (a, ...rest) {
    console.log(a)
    console.log(rest)
}

values(5, 10, 2, 8)