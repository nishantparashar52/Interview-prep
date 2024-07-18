async function executePromisesInOrder(promises, delay) {
    const results = []
    for(let promise of promises) {
        results.push(await promise())
        await new Promise(res => setTimeout(res, delay))
    }
    return results
}

async function executePromisesInRandomOrder(promises, randomDelay) {
    const results = []
    for(let promise of promises) {
        results.push(await promise())
        console.log(results, randomDelay())
        await new Promise(res => setTimeout(res, randomDelay()))
    }
    return results
}
const randomDelay = () => Math.floor(Math.random() * 4000);
const sleep = (t) => new Promise(res => setTimeout(() => res(`${t} resolved`), t));
executePromisesInRandomOrder([() => sleep(500), () => sleep(400), () => sleep(100)], randomDelay).then(console.log);

function executePromisesInOrder1(promises) {
let Resolve = Promise.resolve(), results = [];

promises.forEach((promise) => {
    Resolve = Resolve.then(promise).then(val => {
        results.push(val)
        if(results.length === promises.length) {
            return results;
        }
    })
})
return Resolve;
}