import { Component, Input } from '@angular/core';
import { Character } from 'src/app/data/character';
import { Experience } from 'src/app/data/experience';
import { Momentum } from 'src/app/data/momentum';
import { Stat } from 'src/app/data/stat';
import { Progress } from 'src/app/data/progress';
import { PROGRESS_RANK } from 'src/app/data/progress';
import { Status } from 'src/app/data/status';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent {

  @Input() characterData!: Character;

  formData: Partial<Character> = {};

  defaultCharacterData: Character = {
    name: 'Geralt of Rivia',
    experience: new Experience,
    momentum: new Momentum,
    stats: {
      edge: {id: 'edge', name: 'Edge', value: 0},
      heart: {id: 'heart', name: 'Heart', value: 0},
      iron: {id: 'iron', name: 'Iron', value: 0},
      shadow: {id: 'shadow', name: 'shadow', value: 0},
      wits: {id: 'wits', name: 'wits', value: 0},
    },
    bonds: {rank: PROGRESS_RANK.Epic, value: 0},
    vows: [],
    debilities: {
      wounded: false,
      shaken: false,
      unprepared: false,
      encumbered: false,
      maimed: false,
      corrupted: false,
      cursed: false,
      tormented: false
    },
    statuses: {
      health: new Status,
      spirit: new Status,
      supply: new Status
    },
    assets: []
  }

  constructor() {
    this.formData = this.characterData || this.defaultCharacterData;
    if(this.formData.experience) this.formData.experience.value = 10;
    if(this.formData.experience) this.formData.experience.used = 5;
  }

}
