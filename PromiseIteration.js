function PromisePool(promises, maxLimit) {
    let results = [], pending = 0, currentIndex = 0;
    return new Promise((res, rej) => {
        function helper() {

        if(pending === 0 && results.length === promises.length) res(results)
        while(currentIndex < promises.length && pending < maxLimit) {
            pending++;
            promises[currentIndex]().then((val) => {
                console.log(val)
                pending--
                results.push(val)
                helper()
            })
            currentIndex++;
        }
        }
        helper()
    })
}

const sleep = (t) => new Promise(res => setTimeout(() => res(`${t} resolved`), t));
PromisePool([() => sleep(5000), () => sleep(400), () => sleep(100), () => sleep(500),
    () => sleep(1400),
    () => sleep(4000),
    () => sleep(400),
    () => sleep(100),
    () => sleep(200)], 3)
  .then((val) => console.log(`done ${val}`))


  function PromiseInSequence(promises) {
    let results = [], sequence = Promise.resolve();
    promises.forEach(promise => {
        return sequence.then(promise).then(val => {
            results.push(val)
            setTimeout(() => 
            results, 1000)
        })
    })
    return sequence
}

function delayedPromise(promises, delay) {
    const result = [];
    let currentIndex = 0
    return new Promise((res, rej) => {
        function helper() {
            if(currentIndex === promises.length) res(result)
            if(currentIndex < promises.length) {
                promises[currentIndex]().then(val => {
                    result.push(val)
                    currentIndex++
                    setTimeout(() => {
                        helper()
                    }, delay)
                }).catch(rej)
            }
        }
        helper()
    })
}