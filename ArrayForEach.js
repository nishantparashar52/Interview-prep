// forEach() expects a synchronous function — it does not wait for promises. 

const ratings = [5, 4, 5];
var sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0


// Notice that index 2 is skipped, since there is no item at
// that position in the array.
// [2, 5, , 9].forEach(logArrayElements);
// Logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9


const flatten = (arr) => {
    const result = [];
    const inner = (arr) => {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
            inner(item);
            } else {
            result.push(item);
            }
        });
        return result;
    }
    inner(arr)
  };

  flatten([1, [2, [3, [4]], 5]]);

  const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by forEach() since length is 3
  };
  Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
  // 2
  // 3
  // 4
  