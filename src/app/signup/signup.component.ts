import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class AppComponent {

  plant = 'mango';

  people: any[] = [
    { name: 'Bret Lee' },
    { name: 'Shane Bond' },
    { name: 'Steve Rogers' },
    { name: 'Tony Stark' },
    { name: 'Stephen Strange' }
  ];

}

