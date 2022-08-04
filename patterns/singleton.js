import currentDateAndTime from "./singletonModule.js";

console.log(currentDateAndTime);
// Singleton patterns
// With older version of javascript

var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object(
            "I was instantiated at: " + new Date().toLocaleString()
        );

        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        },
    };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1);
console.log(instance2);
