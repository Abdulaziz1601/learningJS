"use strict";

// Singleton with objrect litetals

// Objects are not equal
let instane;
class Counter {
    constructor() {
        if(!instance) {
            instance=this;
        }
        return instance;
    }
}