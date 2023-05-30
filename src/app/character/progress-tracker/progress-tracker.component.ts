import { Component, Input, AfterViewInit } from '@angular/core';
import { Progress } from 'src/app/data/progress';

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.scss']
})
export class ProgressTrackerComponent implements AfterViewInit {

  @Input() data?: Progress;

  boxes: number[] = new Array(10).fill(0);

  ngAfterViewInit(): void {
    for (let index = 0; index < this.boxes.length; index++) {
      if (this.data)
      {
        if (this.data.value / 4 >= (index+1)) this.boxes[index] = 4;
        else if ((index+1)*4 - this.data.value < 4) this.boxes[index] = 4-((index+1)*4 - this.data.value);
      }
    }
  }

}
