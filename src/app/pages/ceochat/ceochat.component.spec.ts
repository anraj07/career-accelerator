import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeochatComponent } from './ceochat.component';

describe('CeochatComponent', () => {
  let component: CeochatComponent;
  let fixture: ComponentFixture<CeochatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeochatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeochatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
