class Observer {
    constructor() {
        this.observers = [];
    }
    add(observer) {
        this.observers.push(observer);
    }
    remove(observer) {
        let index = this.observers.findIndex(observer);
        this.observers.splice(index, 1);
    }
    notify(message) {
        this.observers.forEach(observer => observer (message))
    }
}

class Dog {
    constructor() {

    }
    bark() {
        console.log('dog barks')
    }
}


class Cat {
    constructor() {

    }
    meow() {
        console.log('cat barks')
    }
}

let animal = new Observer();
let d = new Dog();

let c = new Cat();
animal.add(c.meow);

animal.notify();