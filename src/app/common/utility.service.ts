import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private _appTitle = environment.appTitle;
  get appTitle() { return this._appTitle; }

  constructor(
    private titleService: Title
  ) { }

  setTitle(title?: string) {
    const t = title ? `${title} | ${this._appTitle}` : this._appTitle;
    this.titleService.setTitle(t);
  }
}
