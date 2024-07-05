const MIN = 100
const MAX = 5000
const Elem = document.getElementById('number')
async function getFancyNumber() {

    const timer = Math.floor(Math.random() * (MAX - MIN)) + MIN
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (100 - 0)) + 0)
        }, timer)
    })
}
const timer = setInterval(() => {
    getFancyNumber().then(val => {
        if(val > 1000) return
        Elem.innerText = val
    })
}, 1000)
setTimeout(() => {
    clearInterval(timer)
}, 30000)
// clearInterval(timer)


function timeLimit (fn, t) {
    return async function(...args) {
        if(args > t) return new Error('time limit exceeded')
        setTimeout(fn, t)
    }
}
function fn(t) {
    return new Promise((res, rej) => {
        return setTimeout(res, t)
    })
}

