// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

let age: number;

age = 12.1;

let userName: string;

userName = "Sean";

let isStudent: boolean;
isStudent = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "gardening", "fishing"];

let person: {
    name: string;
    age: number;
};

    person = {
        name: 'Sean',
        age: 49
    };

//Array of objects
let people: {
    name: string;
    age: number;
}[];

//Type inference- use whenever possible
let course = 'React - The Complete Guide';

//By type inference, the below is impossible.  It must be a string. 
//course = 1234;

//Union types
let lesson: string | number = 'React - The Complete Guide';

//Type aliases
type Car =  {
    make: string;
    model: string;
}

let car: Car;

//Functions and Types
function addition(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    return console.log(value);
}

//Generics
// <T> tells Typescript all values should be of type "T"...ie. the same type
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array ];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);



