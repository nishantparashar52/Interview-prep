// let P = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success');
//     }, 2000);
// })

// P.then((message) => {
//     return new Error('Error');
// }).then((message) => {
//     console.log(`message is ${message}`);
// })
// let P1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Error');
//     }, 2000);
// })

// function CheckPromise(value) {
//     if(value) {
//         return new Promise((resolve, reject) => {
//             resolve('Success');
//         })
//     } else {
//         return new Promise((resolve, reject) => {
//             reject('Error');
//         })
//     }
// }

// CheckPromise(true).then((message) => {
//     console.log(`message is ${message}`);
//     return message

// }).then((message) => {
//     console.log(`message is 1 ${message}`);
//     return message
// }).catch((message) => {
//     console.log(`message is error 3${message}`);
// }).then((message) => {
//     return new Error(`message is 2${message}`);
// }).then((message) => {
//     console.log(`message is 4${message}`);
// })

// const FirstPromise = new Promise((resolve, reject) => {
//     resolve('First')
// })

// const SecondPromise = new Promise((resolve, reject) => {
//     resolve(FirstPromise)
//     // return FirstPromise
//     // resolve('Second Promise')
// })

// SecondPromise.then((message) => {
//     // console.log(`message is ${message}`);
//     return message
// }).then((message) => {
//     console.log(message)
// })

// function loadUrl(url) {
//     return fetch(url).then((response) => {
//         if(response.status === 200) {
//             return response.json()
//         } else {
//             return new Error('Error')
//         }
//     })

// }

// loadUrl('https://jsonplaceholder.typicode.com/todos/1').then((message) => {

//     console.log(`message is ${message}`);
// })

// async function loadUrl1(url) {
//  const response = await fetch(url)
//     if(response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Error')
//     }
// }

function FuncPromise() {
  return new Promise((resolve, reject) => {
    resolve("Success");
  });
}

function FuncPromise2() {
  return new Promise((resolve, reject) => {
    resolve("Success 2");
  });
}

function FuncPromise3() {
  return new Promise((resolve, reject) => {
    resolve("Success 3");
  });
}

function recursivePromise(promises) {
  if (promises.length === 0) {
    return;
  }
  let p = promises.shift();
  p.then((val) => {
    console.log(`val is ${val}`);
    return val;
  });
  return recursivePromise(promises);
}

// recursivePromise([FuncPromise(), FuncPromise2(), FuncPromise3()]).then((message) => {
//     console.log(`message is ${message}`);
// })

function PolyFillPromise(executer) {
  let onResolved,
    onReject,
    fullfilled = false,
    isCalled = false,
    value = null,
    isRejected = false;
  const resolve = (val) => {
    fullfilled = true;
    value = val;
    if (typeof onResolved === "function") {
      isCalled = true;
      onResolved(val);
    }
  };
  const reject = (val) => {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      isCalled = true;
      onReject(val);
    }
  };

  try {
    executer(resolve, reject);
  } catch (e) {
    reject(e);
  }
  this.then = function (cb) {
    onResolved = cb;
    if (fullfilled && !isCalled) {
      onResolved(value);
    }
    return this;
  };
  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      onReject(value);
    }
    return this;
  };
}

let P1 = new PolyFillPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});
P1.then((message) => {
  console.log(`message is ${message}`);
});
P1.catch((message) => {
  console.log(`message error is ${message}`);
});

let P2 = new PolyFillPromise((resolve, reject) => {
  resolve("Success 1");
});
P2.then((message) => {
  console.log(`message is ${message}`);
});
P2.catch((message) => {
  console.log(`message error is ${message}`);
});

PolyFillPromise.resolve = function (val) {
  return new PolyFillPromise((resolve, reject) => {
    resolve(val);
  });
};

PolyFillPromise.reject = function (val) {
  return new PolyFillPromise((resolve, reject) => {
    reject(val);
  });
};

Promise.all1 = function (promises) {
  const promiseArr = [];
  let pending = promises.length;
  return new Promise((resolve, reject) => {
    promises.map((promise, idx) => {
      promise.then((val) => {
        promiseArr[idx] = val;
        pending--;
        if (pending === 0) {
          resolve(promiseArr);
        }
      });
    });
  });
};

Promise.all1([FuncPromise(), FuncPromise2(), FuncPromise3()]).then(
  (message) => {
    console.log(`message is ${message}`);
  }
);

function FuncPromiseT(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("delay 0 Success");
    }, delay);
  });
}

function FuncPromise2T(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("delay 2 Success");
    }, delay);
  });
}

function FuncPromise3T(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("delay 3 Succes");
    }, delay);
  });
}
Promise.all1([
  FuncPromiseT(2000),
  FuncPromise2T(1000),
  FuncPromise3T(5000),
]).then((message) => {
  console.log(`message is ${message}`);
});

function sequentialPromisesWithDelay(delays) {
  let promise = Promise.resolve();
  delays.forEach((delay) => {
    promise = promise.then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`resolved after ${delay} ms`);
          resolve();
        }, delay);
      });
    });
  });
  return promise;
}

sequentialPromisesWithDelay([2000, 1000, 5000]).then(() => {
  console.log("All promises resolved");
});

function Action(name, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`Name is ${name}`)
      resolve(`Name is ${name}`);
    }, 2000);
  });
  setTimeout(() => {
    // console.log(`Name is ${name}`)
    cb(`Name is ${name}`);
  }, 2000);
}

function Action1(name, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`Name is ${name}`)
      resolve(`Name is Action 1${name}`);
    }, 1000);
  });
  setTimeout(() => {
    // console.log(`Name is ${name}`)
    cb(`Name is Action 1${name}`);
  }, 1000);
}
function Action2(name, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`Name is ${name}`)
      resolve(`Name is Action 2${name}`);
    }, 1000);
  });
  setTimeout(() => {
    // console.log(`Name is ${name}`)
    cb(`Name is Action 2${name}`);
  }, 1000);
}
Action("A", (message) => {
  console.log(`Name is ${message}`);
  Action1("B", (message) => {
    console.log(`Name is ${message}`);
    Action2("C", (message) => {
      console.log(`Name is ${message}`);
    });
  });
});
const A = Action("A").then((message) => {
  console.log(`Name is ${message}`);
  return Action1("B");
});
A.then((message) => {
  console.log(`Name is ${message}`);
  return Action2("C");
}).then((message) => {
  console.log(`Name is ${message}`);
});
Promise.resolve(10).then((val) => console.log(val));

// console.log(message)

const getAppData = (datacenterUrl, applicationType) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        protectedApps: Math.floor(Math.random() * 100),
        unprotectedApps: Math.floor(Math.random() * 100),
      });
    }, 1000);
  });

const applicationTypes = ["vmware", "mssql", "ahv"];

const datacenters = [
  { name: "olive", url: "https://www.olive.com/stat" },
  { name: "comet", url: "https://www.comet.com/stat" },
  { name: "blah", url: "https://www.blah.com/stat" },
];

function getAllDataCentersTypes(datacenters, applicationTypes) {
  const promises = [],
    data = {};
  datacenters.forEach((datacenter) => {
    applicationTypes.forEach((applicationType) => {
      const promise = getAppData(datacenter.url, applicationType).then(
        (val) => {
          const {protectedApps, unprotectedApps} = val;
          if (!data[datacenter.name]) {
            data[datacenter.name] = {
              protectedApps,
              unprotectedApps,
            };
          } else {
            data[datacenter.name] = {
              protectedApps:
                data[datacenter.name].protectedApps + protectedApps,
              unprotectedApps:
                data[datacenter.name].unprotectedApps + unprotectedApps,
            };
          }
        }
      );
      promises.push(promise);
    });
  });
  return Promise.all(promises).then(() => data);
}
getAllDataCentersTypes(datacenters, applicationTypes).then((val) =>
  console.log(val)
);


async function batchApiCalls(apiCalls, batchSize) {
    let i = 0;
    const results = [];
    while (i < apiCalls.length) {
        const batch = apiCalls.slice(i, i + batchSize);
        results.push(...await Promise.all(batch.map(call => call())));
        i += batchSize;
    }
    return results;
}

    const apiCalls = [
        () => getAppData(datacenters[0].url, applicationTypes[0]),
        () => getAppData(datacenters[1].url, applicationTypes[1]),
        // ... more API calls ...
    ];
    
    batchApiCalls(apiCalls, 5).then(results => {
        console.log(`results ${results}`);
    });


    Array.prototype.myReduce = function (cb, initial) {
      let accumulator = initial;
      for (let i = 0; i < this.length; i++) {
        accumulator = cb(accumulator, this[i]);
      }
      return accumulator;
    }

    const arr = [1, 2, 3, 4, 5];
    console.log(arr.myReduce((acc, val) => acc + val, 0)); // 15



let promisePool = (promises, poolLimit) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let queue = []
    promises.map((promise, index) => {
      promise.then()
    })
  })


function queuePool(q) {
  if(queue.length > poolLimit) queue.push(q);
  else queue.shift()
}
}

