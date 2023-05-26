import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-pip',
  templateUrl: './experience-pip.component.html',
  styleUrls: ['./experience-pip.component.scss']
})
export class ExperiencePipComponent {

  @Input() value: number = 0;

}
