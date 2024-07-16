const range = (start, stop, step) => {
    return Array.from({length: (stop - start)/ step  + 1}, (_, i) => start + (i * step))
}


console.log(range(0,100, 10))
