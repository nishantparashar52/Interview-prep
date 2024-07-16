function Step(n) {
    return n <= 0 ? 1 : n === 1 ? 1 : Step(n - 1) + Step(n - 2);
}


console.log(Step(5))


function ColumnTitle(s) {
    let result = 0;
    for(let i = 0; i< s.length; i++) {
        result = result * 26 + (s.charCodeAt(i) - 64)
    }
    return result;
}

console.log(ColumnTitle('BA'))


function FlattenObj(obj, r1) {
    let result = {}

    function helper(obj, k = '') {
        for(let [key, value] of Object.entries(obj)) {
            let keyName = k ? `${k}.${key}` : key;
            if(value && typeof value === 'object' && !Array.isArray(value) && value !== null){
                helper(value, keyName)
            } else {
                result = Object.assign(result, {[keyName]: value})
            }
        }
        return result;
        // for(let [key, value] of Object.entries(result)) {
        //     if(value === r1) return key
        // }
    }
    return helper(obj, '')
}
const deeplyNestedObj = {
    a: {
      b: {
        c: {
          d: {
            e: "e",
            f: "f",
            g: {
              G: undefined,
              h: {
                i: {},
                j: {
                  k: {
                    K: null,
                    l: {
                      abc: 123,                   
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    e1: {},
    f2: {},
    P1: {
      q1: {
        r1: "r1"
      }
    }
  }
const result = FlattenObj(deeplyNestedObj);


for(let [key, value] of Object.entries(result)) {
    if(value == '123') console.log(key)
}