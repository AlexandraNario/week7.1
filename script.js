//Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

//OOPs is the Object=Oriented Programming System with four pillars: encapsulation, abstraction, inheritance, and polymorphism.
//Create a class called 'Shape' with a method to calculate the area
class Shape {
  constructor(name) {
    this.name = name;
  }
  //The area method is abstract and should be overridden by subclasses
    area() {
    throw new Error("This method must be implemented by subclasses");
  }
}

//Create a subclass called 'Circle' that inherits from the 'Shape' class
class Circle extends Shape {
  constructor(radius) {
    //Call the super constructor with the name 'circle'
    //"Intro to JS Classes" slide 19: 
    //"in order for a subclass to have access to the extended classes' methods the super keyword is need to be called in the constructor"
    super("circle");
    this.radius = radius;
  }
  //Override the area method to calculate the area of a circle
   area() {
    //The area of a circle is pi times the square of the radius
    //Math.PI returns PI (the ratio of a circle's area to the square of its radius, approximately 3.14)
    return Math.PI * this.radius * this.radius;
  }
}

//Create a subclass called 'Triangle' that inherits from the 'Shape' class
class Triangle extends Shape {
  constructor(base, height) {
    //Call the super constructor with the name 'triangle'
    super("triangle");
    this.base = base;
    this.height = height;
  }
  //Override the area method to calculate the area of a triangle
   area() {
    //The area of a triangle = 1/2 x base x height, base being the length of the triangle and height being the altitude
    return 0.5 * this.base * this.height;
  }
}

//using polymorphism
//Create an instance of the 'Circle' class and calculate its area
const circle1 = new Circle(5); //A circle with radius 5
console.log(`The area of the ${circle1.name} is ${circle1.area()} square units`);

//Create an instance of the 'Triangle' class and calculate its area
const triangle1 = new Triangle(3, 4); //A triangle with base 3 and height 4
console.log(`The area of the ${triangle1.name} is ${triangle1.area()} square units`);