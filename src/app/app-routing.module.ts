import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterGeneratorComponent } from './character/character-generator/character-generator.component';
import { CharacterSheetComponent } from './character/character-sheet/character-sheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new-character', component: CharacterGeneratorComponent },
  { path: 'character-sheet', component: CharacterSheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
