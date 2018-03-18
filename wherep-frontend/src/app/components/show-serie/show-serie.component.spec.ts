import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSerieComponent } from './show-serie.component';

describe('ShowSerieComponent', () => {
  let component: ShowSerieComponent;
  let fixture: ComponentFixture<ShowSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
