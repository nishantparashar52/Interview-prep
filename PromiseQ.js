
const p = new Promise((res,rej) => rej(Error('error here')))
// p.catch((err) => {
//     console.log(err);
//     return err
// }).then(val => console.log(val))

p.catch((err) => {
    console.log(err);
    return err
})

p.catch((err) => {
    console.log(err);
    return err
})


function Tuple(str) {
    const arr = [];
    const regexMatch = str.match(/\([^\)]+\)/g)
    console.log(regexMatch)

    const result = regexMatch.reduce((acc, group) => {
        let row = group.replace(/[\s\()]/g, '').split(',')
        acc.push(row)
        return acc
    }, [])
    return result
}

Array.prototype.multiply = function(val) {
    const position = val - 1
    return this.reduce((acc, v) => v[position] * acc, 1)
}

const input = `(1,2,3), (4,5,6), (7,8,9)`

console.log(Tuple(input).multiply(1)) // [2, 4, 6, 8, 10, 12, 14, 16, 18]
