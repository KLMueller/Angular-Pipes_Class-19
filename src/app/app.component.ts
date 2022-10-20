import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Class_19_Angular_Pipes';
  decorations = ['ghosts', 'pumpkins', 'lights', 'bats'];
  party = {
    name: ['Maureen', 'Laurie', 'Tina', 'Meghan'],
    dish: '',
    guests: '',
  };
}
