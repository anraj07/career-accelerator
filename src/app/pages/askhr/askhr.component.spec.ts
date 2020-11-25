import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskhrComponent } from './askhr.component';

describe('AskhrComponent', () => {
  let component: AskhrComponent;
  let fixture: ComponentFixture<AskhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskhrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
