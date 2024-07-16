class CustomPromise {

    constructor(executor) {
        this.value = null, this.thenFn = [], this.cathFn = null, this.resolved = false
        const resolve = (val) => {
            this.value = val
            this.resolved = true
            this.thenFn?.reduce((acc, curr) => curr(acc), this.value)
            return this
        }
        const reject = (val) => {
            this.value = val
            if(typeof this.cathFn === 'function') this.cathFn(val)
            return this
        }
        executor(resolve, reject)
    }
    then(fn) {
        this.thenFn.push(fn);
        if(this.resolved) {
            this.thenFn.reduce((acc, curr) => curr(acc), this.value)
        }
        return this
    }

    catch(fn) {
        this.cathFn = fn;
        this.cathFn(this.value)
        return this
    }
    static resolve(value) {
        return new CustomPromise((res, rej) => res(value))
    }

    static reject(value) {
        return new CustomPromise((res, rej) => rej(value))
    }

    static all(promises) {
        const resolvedArr = [], rejectArr = []
        return new CustomPromise((res, rej) => {
            promises.forEach((promise) => {
                promise.then((data) => {
                    resolvedArr.push(data)
                    if(resolvedArr.length === promises.length) res(resolvedArr)
                })
            })
        }).catch()
    }
}

const P1 = new CustomPromise((res, rej) => res('hi')).then(val => { console.log(`hi ${val}`); return val * 2}).catch(val => {console.log(new Error(`${val} error`)); return val}).then(val => console.log(`again ${val}`))
// const P2 = new CustomPromise((res, rej) => setTimeout(() => res('hi timeout'), 3000)).then(val => { console.log(val);return val }).then(val => val * 2).then(val => console.log(new Error(val)))