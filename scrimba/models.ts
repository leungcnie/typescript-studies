// Interfaces can't enforce anything if coming from server-side
// Can't assign default values, methods, etc
import { Person } from './models/person.model';

// We have the option of passing in less info or none and assigning later
const example1: Person = new Person({firstName: 'Dollan'});

example1.firstName = 'Dylan';
example1.middleName = 'Coding God';
example1.lastName = 'Israel';