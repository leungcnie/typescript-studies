// public: do anything you want
// private: once you set it, you can use inside your code, but not outside
// readonly: once you set value, will never be reset
// proteted: cannot be called directly, only passed from parent to child

import { Bear } from './models/bear.model';
import { Animal } from './models/animal.model';

// We don't wanna let ppl make new animals
// const animal = new Animal({type: bear});
const bear = new Bear({ame: 'Omega', tail: true});
bear.claws = 3;
// bear.tail = false; => cannot reset after being set on line 11
bear.add(1, 2);