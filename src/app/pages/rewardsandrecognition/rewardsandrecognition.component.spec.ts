import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsandrecognitionComponent } from './rewardsandrecognition.component';

describe('RewardsandrecognitionComponent', () => {
  let component: RewardsandrecognitionComponent;
  let fixture: ComponentFixture<RewardsandrecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsandrecognitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsandrecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
