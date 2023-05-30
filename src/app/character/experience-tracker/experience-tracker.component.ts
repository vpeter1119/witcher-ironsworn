import { Component, Input, AfterViewInit } from '@angular/core';
import { Experience } from 'src/app/data/experience';

@Component({
  selector: 'app-experience-tracker',
  templateUrl: './experience-tracker.component.html',
  styleUrls: ['./experience-tracker.component.scss']
})
export class ExperienceTrackerComponent implements AfterViewInit {

  @Input() data?: Experience;

  max = 30;
  xpArray: number[] = [];

  ngAfterViewInit(): void {
    for (let i = 0; i < this.max; i++) {
      if (this.data && i < this.data.used) this.xpArray.push(2);
      else if (this.data && i < this.data.value) this.xpArray.push(1);
      else this.xpArray.push(0);
    }
  }

}
