import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSerieComponent } from './search-serie.component';

describe('SearchSerieComponent', () => {
  let component: SearchSerieComponent;
  let fixture: ComponentFixture<SearchSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
