import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGeneratorComponent } from './character-generator.component';

describe('CharacterGeneratorComponent', () => {
  let component: CharacterGeneratorComponent;
  let fixture: ComponentFixture<CharacterGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterGeneratorComponent]
    });
    fixture = TestBed.createComponent(CharacterGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
