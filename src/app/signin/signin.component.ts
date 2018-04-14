import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  plant = 'mango';

  people: any[] = [
    { name: 'Bret Lee' },
    { name: 'Shane Bond' },
    { name: 'Steve Rogers' },
    { name: 'Tony Stark' },
    { name: 'Stephen Strange' }
  ];

}

