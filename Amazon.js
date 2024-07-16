
// amazon
const arr = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
function returnSortedArr(arr) {

const charArr = [], numArr = []
arr.forEach(item => {
    const elem = item.split(' ')[1];
    const charRegex = /([a-z])/
    const numberRegex = /([0-9])/
    if(charRegex.test(elem)) {
        charArr.push(item)
    } else if(numberRegex.test(elem)) {
        numArr.push(item)
    }
    })
    charArr.sort((a,b) => {
        const aElem = a.split(' ')[1];
        const bElem = b.split(' ')[1];
        if(aElem < bElem) return -1;
        else if(aElem > bElem) return 1;
        else return 0;
    })
    charArr = [...charArr, ...numArr]
    return charArr;
}
returnSortedArr(arr)
