// Typically want to avoid
let ex1: any;
// let ex1: any = true;
// let ex1: any = {};

let ex2: boolean = true;
let ex3: number = 10;
let ex4: string = "hello";


//------------------------
// MULTIPLE TYPES using | 
//------------------------
// Still want to avoid when possible

let ex5: boolean | number = 35;
ex5 = true;


//----------------------------
// IMPLICIT VS EXPLICIT TYPING
//----------------------------

// Explicit
let ex6: number = 5;

// Implicit: if you hover over arr + ex7, they already have type number
const arr = [1, 3, 4, 5];
let ex7 = arr.reduce((a, b) => a + b);


//----------------
// CHECKING TYPES
//----------------
// - use instanceof
class Bear {
  constructor(num) {
  }
}

const bear = new Bear(3);

// cannot use typeof b/c it only checks JS primitives
if (bear instanceof Bear) {
    console.log("Hello from TypeScript");
}


//-----------------
// TYPE ASSERTIONS
//-----------------
// - cast an any type as an explicit type
let ambiguous: any = 'Hello';

// (1) use alligator brackets
let strLength = (<string> ambiguous).length;

// (2) use 'as' syntax
let strLength2 = (ambiguous as string).length;