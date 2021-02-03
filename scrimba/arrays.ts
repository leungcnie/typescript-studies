//-------------
// ARRAY TYPES
//-------------

const e1: any[] = ['blah'];
const e2: string[] = ['blah'];
const e3: (number | boolean)[] = [true, false, 1];
// 2D arrays
const e4: boolean[][] = [[true, false]];

//--------
// TUPLES
//--------
// - express an array with a fixed number of elements whose types are known

let exTuple: [string, number] = ['string', 2];
// exTuple = [2, 'blah']; => invalid, order matters

//--------
// ENUMS
//--------
// - giving more friendly names to sets of numeric values
import { Age } from './age.enum';
import { Names } from './name.enum';

function totalAge(age1: Age, age2: Age) {
  return age1 + age2;
}

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up === 1);
console.log(Direction.Down === 2);