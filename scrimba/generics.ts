// Way to manipulate data type that is not predefined
// Don't know what data type passing in OR passing in multiple data types
// Assigning a bunch of anys

function example<T>(arg: T[]): T {
  return arg[0];
}

example([]);