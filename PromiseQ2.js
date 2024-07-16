// function PromiseSequence(urls) {
//     const results = Promise.resolve();
//     let promises = 0
//     urls.forEach(url => {
//         promises++;
//         results = results.then(url).then(response => {
//             results.push(response)
//             return results
//         })
//     })
//     return results
// }


PromiseSequence([
    () => PromiseCreator(1, 1000, 'first'),
    () => PromiseCreator(2, 1000, 'second'),

    () => PromiseCreator(3, 1000, 'third'),
    () => PromiseCreator(4, 1000, 'fourth'),
    () => PromiseCreator(5, 1000, 'fifth'),
]).then(val => console.log(val))


function PromiseCreator(i, time, text) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(`${`text ${text} at ${i}`}`)
        }, time)
    })
}


// async function PromiseSequence(arrayOfPromise) {
//     let results = []
//     for(let promiseFunc of arrayOfPromise) {
//         const result =  await promiseFunc()
//         results.push(result)
//     }
//     return results;
// }


function PromiseSequence(arrayOfPromise) {
    let results = []
    let sequence = Promise.resolve()
    arrayOfPromise.forEach(promiseFunc => {
        sequence = sequence.then(promiseFunc).then(result => {
            results.push(result)
            return results
        })
    })
    return sequence
}


function asyncFunc(e) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(e), e * 1000);
    });
  }
  
  const arr = [1, 2, 3];
  let final = [];
  
  function workMyCollection(arr) {
    const final = [];
    return arr.reduce((promise, item) => {
        return promise.then(result => {
            console.log(`result is ${result}`)
            return asyncFunc(item).then(result => final.push(result))
        })
    }, Promise.resolve([]));
  }
  
  workMyCollection(arr)
    .then(() => console.log(`FINAL RESULT is ${final}`));