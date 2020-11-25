import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrblogComponent } from './hrblog.component';

describe('HrblogComponent', () => {
  let component: HrblogComponent;
  let fixture: ComponentFixture<HrblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
