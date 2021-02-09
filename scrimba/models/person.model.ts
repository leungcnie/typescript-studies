export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  
  constructor(data?: any) { // Builds our obj
      this.firstName = data.firstName || 'Dylan';
      this.lastName = data.lastName || 'Israel';
      this.middleName = data.middleName;    
  }
}