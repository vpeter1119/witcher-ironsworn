import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/data/stat';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent {

  @Input() title?: string;
  @Input() data?: Stat;

}
