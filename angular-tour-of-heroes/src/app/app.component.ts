import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes/heroes.component.html',
  styleUrls: ['./heroes/heroes.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
