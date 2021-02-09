//---------
// BARRELS
//---------
// Makes exporting interfaces a little cleaner

// 1. make interfaces folder
// 2. make index.ts in interfaces folder, exporting * from specific interfaces
// 3. import with object destructuring
import { Pig, Man, Bear } from './interfaces/index';

//-------------------
// INTERSECTION TYPES
//-------------------
// ability to add multiple types to a single class

let man: Man | Pig;
let bear: Bear;
let pig: Pig;

// RECOMMENDED: intersection/combined type of multiple interfaces
type ManBearPig = Bear & Man & Pig;

// Inherits ALL interface properties
let manBearPig: ManBearPig;
manBearPig.firstName = 'Dylan';
manBearPig.claws = 3;
manBearPig.bacon = false;