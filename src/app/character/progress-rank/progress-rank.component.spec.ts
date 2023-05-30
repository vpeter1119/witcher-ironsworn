import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressRankComponent } from './progress-rank.component';

describe('ProgressRankComponent', () => {
  let component: ProgressRankComponent;
  let fixture: ComponentFixture<ProgressRankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressRankComponent]
    });
    fixture = TestBed.createComponent(ProgressRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
