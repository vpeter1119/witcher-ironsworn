import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Angular Material */

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';

/* Components */

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CharacterGeneratorComponent } from './character/character-generator/character-generator.component';
import { CharacterSheetComponent } from './character/character-sheet/character-sheet.component';
import { ExperienceTrackerComponent } from './character/experience-tracker/experience-tracker.component';
import { ExperiencePipComponent } from './character/experience-tracker/experience-pip/experience-pip.component';
import { StatComponent } from './character/stat/stat.component';
import { ProgressTrackerComponent } from './character/progress-tracker/progress-tracker.component';
import { ProgressRankComponent } from './character/progress-rank/progress-rank.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    CharacterGeneratorComponent,
    CharacterSheetComponent,
    ExperienceTrackerComponent,
    ExperiencePipComponent,
    StatComponent,
    ProgressTrackerComponent,
    ProgressRankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
