function myModule() {
    this.hello = function() {
        console.log("Hello");
    };

    this.goodbye = function() {
        console.log("bye!");
    };
}
//CommonJS method to use modules
module.exports = myModule; //We exported myModules function