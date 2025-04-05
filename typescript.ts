// Basic Concepts of TypeScript

// 1. Type Annotations
// Type annotations allow you to explicitly set the type of a variable.
let isDone: boolean = false;
let age: number = 25;
let personName: string = "John";

// 2. Interfaces
// Interfaces define the structure of an object.
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

// 3. Classes
// Classes in TypeScript are similar to those in other object-oriented languages.
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

let user = new Student("Jane", "M.", "Doe");

// 4. Enums
// Enums allow you to define a set of named constants.
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;

// 5. Generics
// Generics provide a way to create reusable components.
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");

// 6. Modules
// In TypeScript, you can use modules to organize your code. 
// For example, you can export and import classes, interfaces, functions, etc.

// export class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }

// import { Calculator } from './Calculator';
// let calculator = new Calculator();
// console.log(calculator.add(2, 3));

// 7. Type Inference
// TypeScript can infer the type of a variable based on its value.
let someValue = "this is a string"; // TypeScript infers the type as string

// 8. Union Types
// Union types allow a variable to be one of several types.
function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}

// 9. Type Aliases
// Type aliases create a new name for a type.
type StringOrNumber = string | number;
let sample: StringOrNumber = "Hello";

// 10. Tuples
// Tuples allow you to express an array with a fixed number of elements.
let tuple: [string, number];
tuple = ["hello", 10]; // OK

// 11. Type Declarations vs Interfaces
// Both type declarations and interfaces can be used to define the shape of an object.

type Point = {
    x: number;
    y: number;
};

interface PointInterface {
    x: number;
    y: number;
}

// Differences:
// - Interfaces can be merged, while type declarations cannot.
interface PointInterface {
    z: number;
}

// Now PointInterface has x, y, and z properties.
let point: PointInterface = { x: 1, y: 2, z: 3 };

// - Type declarations can represent more complex types like unions.
type ComplexType = string | number | { x: number; y: number };

// These are some of the basic concepts of TypeScript to get you started.
