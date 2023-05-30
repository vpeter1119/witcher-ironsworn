import { Component, Input } from '@angular/core';
import { PROGRESS_RANK } from 'src/app/data/progress';

@Component({
  selector: 'app-progress-rank',
  templateUrl: './progress-rank.component.html',
  styleUrls: ['./progress-rank.component.scss']
})
export class ProgressRankComponent {

  @Input() rank: PROGRESS_RANK = 0;

  ranks = [
    { display: 'Troublesome', value: PROGRESS_RANK.Troublesome },
    { display: 'Dangerous', value: PROGRESS_RANK.Dangerous },
    { display: 'Formidable', value: PROGRESS_RANK.Formidable },
    { display: 'Extreme', value: PROGRESS_RANK.Extreme },
    { display: 'Epic', value: PROGRESS_RANK.Epic }
  ]

}
