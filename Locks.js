class Lock {
    constructor() {
        this.disable = () => {}
        this.promise = null
    }
    acquire() {
        this.promise = new Promise(res => this.disable = res)
    }
    release () {
        this.disable()
    }
}

const lock = new Lock()

lock.acquire()
async function getFirst() {
    console.log('first started')
    await lock.promise
    console.log('first finished')   
}

getFirst()
setTimeout(() => lock.disable(), 5000)