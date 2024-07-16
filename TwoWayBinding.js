const input = document.createElement('input')
const state = { value: 'BFE' }
model(state, input)

console.log(input.value) // 'BFE'
state.value = 'dev'
console.log(input.value) // 'dev'
input.value = 'BFE.dev'
input.dispatchEvent(new Event('change'))
console.log(state.value) // 'BFE.dev'


function model(state, element) {
    // your code here
    element.value = state.value

    element.addEventListener('change', () => {
        state.value = element.value
    })
    Object.defineProperty(state, 'value', {
        get: function () {
            return this._value
        },
        set: function (val) {
            this._value = val
            element.value = val
        }
    })
  }
  model(state, input)