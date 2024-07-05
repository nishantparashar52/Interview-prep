function range(start, end, step = 1) {
    return {
        [Symbol.iterator]() {
            return this
        },
        next() {
            if( start < end) {
                start = start + step;
                return {
                    value: start,
                    done: false,
                }
            }

            return {
                value: end,
                done: true,
            }
        }
         
    }
}
for(let i of range(0, 20, 5)) {
    console.log(i)
}

function* fibonacci () {
    let current = 1, next = 1;
    while(true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

const seq = fibonacci()
result = seq.find(n => n > 1000)
console.log(result)

// console.log(range(1, 10, 2))