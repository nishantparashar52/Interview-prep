class EventEmitter {
    constructor() {
        this.events = {};
    }
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }
    publish(eventName, data) {
        this.events[eventName].forEach(callback => callback(data));
    }
}