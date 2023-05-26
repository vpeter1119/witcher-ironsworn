import { Component } from '@angular/core';
import { UtilityService } from '../common/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private _utils: UtilityService
  ) {}

  appTitle = this._utils.appTitle;

}
