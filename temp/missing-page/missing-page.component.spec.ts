import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPageComponent } from './missing-page.component';

describe('MissingPageComponent', () => {
  let component: MissingPageComponent;
  let fixture: ComponentFixture<MissingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
