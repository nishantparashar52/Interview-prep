class LRUCache {

    constructor(size) {
        this.size = size
        this.set = new Set()
    }

    get(key) {
        if (this.set.has(key)) {
            this.set.delete(key)
            this.set.add(key)
        }
        return window.localStorage.getItem(key)
    }

    set(key, value) {
        if (this.set.size >= this.size) {
            this.set.forEach((k, i) => {
                if(i >= this.size - 1)
                this.set.delete(k)
            })
        } else {
            this.set.add(key)
        }
        window.localStorage.setItem(key, value)
    }

    list_keys() {
        return Array.from(this.set)
    }

    clear() {
        window.localStorage.clear()
    }
}

//RUN

const cache = new LRUCache(2)
cache.clear()
cache.set("L", 4)
cache.set("R", 1)
cache.set("U", 2)
console.log(cache.list_keys()) // should return [R,U]