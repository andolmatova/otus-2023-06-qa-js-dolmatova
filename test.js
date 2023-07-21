const numbers = [1, 10, 20, 30]

// const res1 = numbers.map((number, i) => {
//     console.log('number', number)
//     console.log('i', i)
//     return  number * i
// })
// console.log('res1', res1)

// numbers.forEach((number) => {
//     console.log(`${number} ** 2`, number ** 2)
// })

// for (const number of numbers) {
//     console.log(`${number} ** 2`, number ** 2)
// }

// const isOdd = numbers.every(number => number % 2 === 1 )
// console.log(isOdd)

const data = [
    {
        a: 5,
        b: 5,
        expected: 10
    },
    {
        a: -5,
        b: 20,
        expected: 15
    }
]

// const res2 = data.find(item => {
//     return item.expected === 10
// })
// console.log(res2)

const res2 = data.includes(item => {
    return item.expected === 10
})
console.log(res2)