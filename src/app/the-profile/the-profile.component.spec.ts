import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProfileComponent } from './the-profile.component';

describe('TheProfileComponent', () => {
  let component: TheProfileComponent;
  let fixture: ComponentFixture<TheProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
