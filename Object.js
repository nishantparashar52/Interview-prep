function PathExist(obj, value, path = '') {
    for(let i in obj) {
        const newPath = path ? `${path}.${i}` : i
        if(obj[i] === value) return newPath
        if(typeof obj[i] === 'object') {
            return PathExist(obj[i], value, newPath)
        }
    }
    return false
}

function ValueExists(obj, value) {

}

const obj = {
    a: {
        b: {
            c: {
                d: {
                    e:3
                }
            }
        }
    }
}

function PathExist1(obj, val, p = '') {
    for(let i in obj) {

        const path = p ? `${p}.${i}` : i
        if(val === obj[i]) return path
        return PathExist1(obj[i], val, path)
    }
}

console.log(PathExist1(obj, 3))
// console.log(PathExist(obj, 3))