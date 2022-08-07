import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNameComponent } from './movie-name.component';

describe('MovieNameComponent', () => {
  let component: MovieNameComponent;
  let fixture: ComponentFixture<MovieNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
