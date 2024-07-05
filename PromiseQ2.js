// function PromiseSequence(urls) {
//     const results = Promise.resolve();
//     let promises = 0
//     urls.forEach(url => {
//         promises++;
//         fetch(url).then(response => response.json()).then(response => {
//             results.push(response)
//             if(urls.length === promises) res(results)
//         })
//     })
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
            return res(console.log(`text ${text} at ${i}`))
        }, time)
    })
}


async function PromiseSequence(arrayOfPromise) {
    let results = []
    for(let i of arrayOfPromise) {
        return await arrayOfPromise[i]
    }
    return results;
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