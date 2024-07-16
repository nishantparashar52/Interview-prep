
function longestUniqueSubstr(str) {
    let start =0, end = 0, maxLength = 0, s = new Set();
    while(end < str.length) {
        if(!s.has(str[end])) {
            s.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, s.size)
        } else {
            s.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}

function SlidingWindow(arr, sum) {
    let start = 0, end = 0, minLength = Infinity, windowSum = 0;

    for(end = 0; end < arr.length; end++) {
        windowSum += arr[end]
        // window > sum shrink the window
        // else expand the window
        while(windowSum >= sum) {
            minLength = Math.min(minLength, (end - start + 1))
            windowSum -= arr[start]
            start++
        }
    }
    if(minLength === Infinity) return 0
    return minLength
}

function SlidingWindowMaxToys(arr) {
    let start = 0, end = 0, hashToys = {}, minLength = 0;

    for(end = 0; end < arr.length; end++) {
        const toy = arr[end]
        hashToys[toy] = (hashToys[toy] || 0) + 1
        // window > sum shrink the window
        // else expand the window
        if(hashToys[toy] === 1) {
            minLength = Math.max(minLength, (end - start + 1))
        }
        while(hashToys[toy] > 1) {
            hashToys[arr[start]]--
            start++
        }
    }
    if(minLength === 0) return 0
    return minLength
}


console.log(SlidingWindowMaxToys(['toy1', 'toy2', 'toy3', 'toy1', 'toy2', 'toy4', 'toy5', 'toy3', 'toy1']))

console.log(SlidingWindow([2,3,2,4,5], 6))
console.log(SlidingWindow([2,3,2,4,5], 20))