const eg1: object = {};
// undefined, null, [] would work, but not NaN

const eg2: Object = NaN;
// works.....bad...

const eg3: {} = {};
// type of EMPTY object
// eg3.firstName = 'Dylan'; => CANNOT DO THIS

//------------
// PARAMETERS
//------------

import { Person } from './interfaces/person.model';

// Put types for parameters
function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, 10);

function sayHello(person: Person) {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

sayHello(new Person({firstName: 'Dylan'}));

//-------------
// RETURN TYPES
//-------------

function sayHi(person: Person): string {
  return `Say Hi to My Little Friend, ${person.firstName}!`    
}

// 'void' when calling another function
function voidExample(): void {
  add(1,2);
}

// 'never' when throwing err, b/c never reach end of function
function neverExample(): never {
  throw Error;
}

//-------------
// CUSTOM TYPES
//-------------
// Deprecated; interfaces and classes preferred 
type person = {firstName: string};
const example3: person = {firstName: 'Dollan'};
example3.firstName = 'Dylan';