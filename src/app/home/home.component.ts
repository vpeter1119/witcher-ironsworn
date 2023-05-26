import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface HomeTile {
  id: string,
  icon: string,
  display: string,
  path: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _router: Router
  ) {}

  tiles: HomeTile[] = [
    { id: 'chargen', icon: 'person', display: 'Create a new character', path: 'new-character' },
    { id: 'char-sheet', icon: 'person', display: 'Character Sheet', path: 'character-sheet' }
  ];

  goTo(path: string) {
    this._router.navigate([path]);
  }

}
