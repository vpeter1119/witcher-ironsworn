import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePipComponent } from './experience-pip.component';

describe('ExperiencePipComponent', () => {
  let component: ExperiencePipComponent;
  let fixture: ComponentFixture<ExperiencePipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencePipComponent]
    });
    fixture = TestBed.createComponent(ExperiencePipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
