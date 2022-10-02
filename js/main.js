function People(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello my name is " + this.name +" and my favorite color is "+ this.favoriteColor +".");
    }
}

var john = new People("John Doe", "blue");
john.greet();

var jane = new People("Jane Smith", "green");
jane.greet();


function Person(firstName, liveArea) {
    this.name = firstName;
    this.livingArea = liveArea;
    this.greet = function() {
        console.log("Hey my name is "+ this.name +" and I live in "+ this.livingArea +".");
    }
}

var mara = new Person("Mara", "Atlanta, GA");
mara.greet();

var jason = new Person("Jason", "Denver, Colorado");
jason.greet();





















