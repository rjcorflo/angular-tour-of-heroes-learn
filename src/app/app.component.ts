import {Component} from '@angular/core';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero}} details!</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  hero = 'Windstorm';
}
