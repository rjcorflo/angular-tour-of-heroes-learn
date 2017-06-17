import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes (The Witcher Edition)';
}
