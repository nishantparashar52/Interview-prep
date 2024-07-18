function ReadObj(o) {
    for(const key in o) {
        if(typeof o[key] === 'object') {
            return ReadObj(o[key])
        }
        return o[key]
    }
    return ''
  }



  function ReadObjValue(obj) {
    for(let i in obj) {
      if(typeof obj[i] === 'object') {
        return ReadObjValue(obj[i])
      }
      return obj[i]
    }
    return ''
  }
  const object = {
    A: {
      B: {
        C: {
          D: {
            E: 2
          },
        },
      },
    },
  }
  console.log(ReadObj(object))



  let arr = [1,2,3,4,4,3,2,1]
  console.log(new Set(arr))