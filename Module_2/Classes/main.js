'use strict';
// Standart ES6
// Classes is a syntactic sugar, It help to make templates, for instance we have article, if we add new article 
// JS must automatically style them

class Rectangle {
    constructor(height, width) {
        this.height = height; // ANYnewObj.height = heightFromArgument;
        this.width = width;
    }

    calcArea() {
        return (this.height * this.width);
    }

    calcPerimeter() {
        return (this.height + this.width) * 2;
    }
}

const square = new Rectangle(5, 5);

const longRect = new Rectangle(20, 50);
console.log(square.calcArea(), square.calcPerimeter());

console.log(longRect.calcArea());

// INHERITANCE

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);// Calls super constructor of parent Class || Always have to be in 1ST LINE
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWithText(25, 10,'Hello SomeTExt', 'red');

console.log(div.calcArea()); //Used inherited function

