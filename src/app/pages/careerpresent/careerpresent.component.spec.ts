import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerpresentComponent } from './careerpresent.component';

describe('CareerpresentComponent', () => {
  let component: CareerpresentComponent;
  let fixture: ComponentFixture<CareerpresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerpresentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerpresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
