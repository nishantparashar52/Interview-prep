# Promise Related Questions and Solutions

This repository contains various promise related functions and their usage.

## PromiseSequence Function

The `PromiseSequence` function is used to execute an array of promises sequentially.

```javascript
async function PromiseSequence(arrayOfPromise) {
    let results = []
    for(let i of arrayOfPromise) {
        return await arrayOfPromise[i]
    }
    return results;
}

PromiseCreator Function
The PromiseCreator function is used to create a new promise that resolves after a certain time.

function PromiseCreator(i, time, text) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(console.log(`text ${text} at ${i}`))
        }, time)
    })
}

workMyCollection Function
The workMyCollection function is used to execute promises sequentially using the reduce method.

asyncFunc Function
The asyncFunc function is a simple function that returns a promise that resolves after a certain time.



function asyncFunc(e) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(e), e * 1000);
    });
}

function workMyCollection(arr) {
    const final = [];
    return arr.reduce((promise, item) => {
        return promise.then(result => {
            console.log(`result is ${result}`)
            return asyncFunc(item).then(result => final.push(result))
        })
    }, Promise.resolve([]));
}

PromiseSequence([
    () => PromiseCreator(1, 1000, 'first'),
    () => PromiseCreator(2, 1000, 'second'),
    () => PromiseCreator(3, 1000, 'third'),
    () => PromiseCreator(4, 1000, 'fourth'),
    () => PromiseCreator(5, 1000, 'fifth'),
]).then(val => console.log(val))

const arr = [1, 2, 3];
workMyCollection(arr)
    .then(() => console.log(`FINAL RESULT is ${final}`));

# Autocomplete Component Repository

This repository contains a reusable `Autocomplete` component built with React and TypeScript.

## Autocomplete Component

The `Autocomplete` component is a simple, reusable input component that fetches suggestions as the user types, and allows the user to select one of these suggestions.

### Props

The `Autocomplete` component accepts the following props:

- `placeholder`: A string that provides a brief hint to the user regarding what kind of input the autocomplete field expects.
- `onSubmit`: A function that is called when the user submits the form.
- `fetchSuggestion`: A function that is called to fetch suggestions based on the user's input.
- `onFocus`: A function that is called when the input field gains focus.
- `onBlur`: A function that is called when the input field loses focus.
- `filterAttr` (optional): A string that can be used to filter the suggestions.

## Usage

To use the `Autocomplete` component, import it into your React component and provide the necessary props:

```typescriptreact
import Autocomplete from './Autocomplete';

// ...

<Autocomplete
  placeholder="Search..."
  onSubmit={value => console.log(`Submitted: ${value}`)}
  fetchSuggestion={value => console.log(`Fetch suggestions for: ${value}`)}
  onFocus={() => console.log('Input focused')}
  onBlur={() => console.log('Input blurred')}
/>