import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material */

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    CharacterGeneratorComponent,
    CharacterSheetComponent,
    ExperienceTrackerComponent,
    ExperiencePipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, 
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
