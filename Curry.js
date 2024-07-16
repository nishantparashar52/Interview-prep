function curry (fn, ...args) {
    if(args.length >= fn.length) {
      return fn(...args)
    } else {
      return (...args2) =>  {
          return curry(fn, ...args, ...args2)
      }
    }
  }
  
  function sum(a, b, c) {
      return a + b + c;
  }
  
  const curriedSum = curry(sum);
  
  console.log(curriedSum(1)(2)(3)); // Output: 6
  console.log(curriedSum(1, 2, 3));


function getFancyNumber() {
  const delay = (Math.floor(Math.random() * 5000) + 100)
  return new Promise((res, rej) => {
    setTimeout(() => res(delay), delay)
  })
}

const id = setInterval(() => {
  const start = new Date().getTime()
  getFancyNumber().then(val => {
    const end = new Date().getTime()
    if(end - start > 1000) return
    else return val
  })
}, 1000)
setTimeout(() => clearInterval(id), 10000)


var addTwoPromises = async function(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(val => {
    return val.reduce((acc,curr) => {
      acc += curr;
      return acc;
    }, 0)
  })
}

const promise1 = function () {
  return new Promise((res, rej) => {
    const result = Math.random() * 10
    res(result)
  })
} 

const promise2 = function () {
  return new Promise((res, rej) => {
    const result = Math.random() * 10
    res(result)
  })
} 



function timeLimit (fn, t) {
  return async function (...args) {
    let timeout = new Promise((res, rej) => {
      timer = setTimeout(() => {
        rej('Time limit exceeded')
      })
    })
    const fnPromise = fn(...args)

    try {
      await Promise.race([fnPromise, timeout])
    } finally {
      clearTimeout(timer)
    }
  }
}

function timeLimit (fn, t) {
  return async function (...args) {
    return Promise.race([fn(...args), new Promise((_, rej) => {
      setTimeout(() => rej('Time limit exceeded'), t)
    })
  ])
  }
}


function PromisePool(promises, limit) {
  let count = 0, running = 0;
  return new Promise((res, rej) => {

    function inner() {
      if(count === promises.length && running === 0) return res(result)
      else if(running < limit && count < promises.length) {
      running++
      inner()
        return promises[count++]().then(() => {
          running--
      })
    }
  }
  inner()
})
}

const function1 = () => new Promise(resolve => setTimeout(() => { console.log("Function 1 done"); resolve(); }, 1000));
const function2 = () => new Promise(resolve => setTimeout(() => { console.log("Function 2 done"); resolve(); }, 1000));
const function3 = () => new Promise(resolve => setTimeout(() => { console.log("Function 3 done"); resolve(); }, 1500));
const function4 = () => new Promise(resolve => setTimeout(() => { console.log("Function 4 done"); resolve(); }, 500));
const function5 = () => new Promise(resolve => setTimeout(() => { console.log("Function 5 done"); resolve(); }, 1000));

const functions = [function1, function2, function3, function4, function5];
PromisePool(functions, 5).then(() => console.log("All functions done"));
