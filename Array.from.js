
console.log(Array.from.call({}, { length: 1, 0: "foo" }));


function f() {
    return Array.from(arguments);
  }
  
  f(1, 2, 3);
  
  // [ 1, 2, 3 ]

// Create an array based on a property of DOM Elements
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));

const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]
  
  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
  Array.from(mapper.values());
  // ['a', 'b'];
  
  Array.from(mapper.keys());
  // ['1', '2'];

  
  Array.from("foo");
// [ "f", "o", "o" ]



const str =
  "grapes grapes guava guava hi apple banana apple banana guava apple banana apple banana pomegranate";
console.log(getTopThreeWords(str));


function getTopThreeWords(str) {
  const arrWords = str.split(" ");
  const hashArr = new Map()
  arrWords.forEach((word) => {
    hashArr.set(word, (hashArr.get(word) || 0) + 1)
  })
  debugger
  return Array.from(hashArr).sort((a,b) => b[1] - a[1]).slice(0,3).map(item => item[0])
}

getTopThreeWords(str)
