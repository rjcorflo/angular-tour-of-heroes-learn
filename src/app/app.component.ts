import {Component} from '@angular/core';
import {Hero} from './hero';

const HEROES: Hero[] = [
  {id: 1, name: 'Geralt of Rivia'},
  {id: 2, name: 'Yennefer of Vengerberg'},
  {id: 3, name: 'Ciri'},
  {id: 4, name: 'Zoltan Chivay'},
  {id: 5, name: 'Jaskier'},
  {id: 6, name: 'Milva'},
  {id: 7, name: 'Triss Merigold'},
  {id: 8, name: 'Regis'},
  {id: 9, name: 'Vesemir'},
  {id: 10, name: 'Emhyr van Emreis'}
];

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes (The Witcher Edition)';

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
