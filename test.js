const sum = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const division = (a, b) => a / b
const mod = (a, b) => a % b

const lmultiply = (a, b) => [...Array(a)].reduce((acc) => sum(acc, b), 0)
