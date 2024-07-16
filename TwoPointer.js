function TwoPointer(arr, sum) {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        if(arr[left] + arr[right] === sum) {
            return [arr[left], arr[right]]
        } else if(arr[left] + arr[right] < sum) {
            left++
        } else {
            right--
        }
    }
    return -1

}

console.log(TwoPointer([2,3,2,4,5], 7))