import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareernextComponent } from './careernext.component';

describe('CareernextComponent', () => {
  let component: CareernextComponent;
  let fixture: ComponentFixture<CareernextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareernextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareernextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
