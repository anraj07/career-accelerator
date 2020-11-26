import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreijpComponent } from './exploreijp.component';

describe('ExploreijpComponent', () => {
  let component: ExploreijpComponent;
  let fixture: ComponentFixture<ExploreijpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreijpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreijpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
