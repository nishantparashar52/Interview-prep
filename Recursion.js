function ReadObj(o) {
    for(const key in o) {
        if(typeof o[key] === 'object') {
            return ReadObj(o[key])
        }
        return o[key]
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