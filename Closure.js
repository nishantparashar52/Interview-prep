function counter () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
}

counter().increment();

counter().increment();
counter().increment();

counter().increment();
// Uncaught TypeError: counter(...).changeBy is not a function