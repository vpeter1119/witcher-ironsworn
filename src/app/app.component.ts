import { Component } from '@angular/core';
import { UtilityService } from './common/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _utils: UtilityService) {this._utils.setTitle()}
}
