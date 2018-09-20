import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAndTricksComponent } from './tips-and-tricks.component';

describe('TipsAndTricksComponent', () => {
  let component: TipsAndTricksComponent;
  let fixture: ComponentFixture<TipsAndTricksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsAndTricksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsAndTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
