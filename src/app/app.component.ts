import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  newPerson = { newEmpID: '', newName: '', newGender: '', newSalary: '', newCity: '', newState: '', newZip: ''};

  people = [];

  constructor() {
    this.people = [
      { id: '1', name: 'Tony Stark', gender: 'M', salary: '10,000', city: 'Plymouth', state: 'MN', zipCode: '55447'},
      { id: '2', name: 'Bret Lee', gender: 'M', salary: '9,000', city: 'Dallas', state: 'TX', zipCode: '65027'},
      { id: '5', name: 'Stephen Strange', gender: 'M', salary: '55,000', city: 'Chicago', state: 'IL', zipCode: '45607'}
    ];
  }


  addEmployee(newPerson) {
    this.people.push({id: newPerson.newEmpID, name: newPerson.newName, gender: newPerson.newGender,
      salary: newPerson.newSalary, city: newPerson.newCity, state: newPerson.newState, zipCode: newPerson.newZip});
  }

}

