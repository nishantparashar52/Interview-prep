
function retryPromsise(retryLimit) {
    let i = 0;
    return new Promise((res, rej) => {
        function Retry() {
            while(i++ < retryLimit) rej(new Error('retry'))
            res('promise resolved')
            }
        Retry();
    })
}

let i = 0;
const retry = (time) => new Promise((res, rej) => {
    while(i < time) {
        i++;
        rej(new Error('err'))
    }
    res('resolved')
})

async function RetryPromise(promises, retryLimit) {
    for(let i =0; i < retryLimit;i++) {
        try {
            return await promises()
        } catch(e) {
            console.log(e)
        }
    }
    throw new Error('error')
}

const res = retryPromsise(4)
.then(val => {
    console.log(val);
    return val
})
.catch(val => {
    console.log(val)
    return val
})
.then(val => console.log(`resolved`))