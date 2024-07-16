Function.prototype.myCall = function (context, ...args) {
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }
    console.log(`this ${this}`)
    context.fn = this;
    return context.fn(...args)
}

Function.prototype.myBind = function (context, ...args) {
    context.fn = this;
    return function () {
        return context.fn(...args)
    }
}

function Name(name, c) {
    console.log(`Name is ${name} ${c}`);
}

let obj1 = {name: "John", class: "11th"};
console.log(Name.myCall(obj1, obj1.name, obj1.class));

let m1 = Name.myBind(obj1, obj1.name, obj1.class);
m1()


// function Memoize (fn) {
//     let cache = {};
//     return function (...args) {
//         let key = JSON.stringify(args);
//         if (cache[key]) {
//             return cache[key];
//         }
//         let val = fn(...args);
//         cache[key] = val;
//         return val;
//     }
// }

// const square = (num1, num2) => {
//     for (let i =0; i < 10000000; i++) {}
//     return num1 * num2;
// }

// console.time('First Call');
// console.log(Memoize(100, 2)());
// console.timeEnd('Second Call');


// console.time('square start');
// console.log(Memoize(200, 2)());
// console.timeEnd('square end');

const sleep = (t) => new Promise(res => setTimeout(res, t));
PromisePool([() => sleep(5000), () => sleep(400), () => sleep(100), () => sleep(500)], 3)
  .then((val) => console.log(`done ${val}`)) 

const tasks = [
    (index) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('task 1')
        resolve(`Task 1 resolved ${index}`)
    }, 1000 * (index + 1))
}),
(index) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('task 2')
        resolve(`Task 2 resolved ${index}`)
    }, 1000 * (index + 2))
}),
(index) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('task 3')
        resolve(`Task 3 resolved ${index}`)
    }, 1000 * (index + 3))
}),
(index) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('task 4')
        resolve(`Task 4 resolved ${index}`)
    }, 1000 * (index + 4))
})
]
// PromisePool2(tasks).then((values) => console.log(`done`, values));

  promisePool1([() => sleep(1000), () => sleep(400), () => sleep(100), () => sleep(500)])
  .then((val) => console.log(`done ${val}`)) 
// PromisePool2([() => sleep(5000), () => sleep(400), () => sleep(100), () => sleep(500)])
//   .then((values) => console.log(`done`, values));


function promisePool(funcs, max){
    let index = 0, inProgress = 0, responses = [];
  
    return new Promise((resolve, reject) => {
  
      function helper() {
        while(inProgress < max && index < funcs.length) {
       
          inProgress++
          funcs[index]().then(val => {
            inProgress--
            responses.push(val)
            if(inProgress === 0 && index === funcs.length) return resolve(responses)
            helper()
        }).catch(reject)
          index++
        }
      }
      helper()
    })
  }

function promisePool1(tasks) {
    return new Promise((resolve) => {
        let index = 0, inProgress = 0;
        function helper() {
            if (index === tasks.length && inProgress === 0) {
                return resolve('tasks resolved')
            }
            if (index < tasks.length) {
                inProgress++
                tasks[index++]().then(() => {
                    inProgress--
                    helper()
                })
            }
        }
        helper()
    })
 }

 promisePool([() => sleep(1000), () => sleep(400), () => sleep(100), () => sleep(500)])
  .then((val) => console.log(`done ${val}`))

  function PromisePool2(tasks) {
    return Promise.all(tasks.map((task, index) => task(index)));
  }

 function PromisePool2(tasks) {
    return Promise.all(tasks.map((task, index) => task(index)));
}
