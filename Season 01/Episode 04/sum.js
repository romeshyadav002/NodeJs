// Modules protects their variables and functions from leaking you need to export and import them

console.log("sum module executed")

var x = 5

// this way we used in mjs module
export function calculateSum(a, b) {
    const sum = a+b
    console.log(sum)
}

// this way we used in commonJs module
// function calculateSum(a, b) {
//     const sum = a+b
//     console.log(sum)
// }
// module.exports  = {calculateSum, x}