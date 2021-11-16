import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpOgranisationComponent } from './list-grp-ogranisation.component';

describe('ListGrpOgranisationComponent', () => {
  let component: ListGrpOgranisationComponent;
  let fixture: ComponentFixture<ListGrpOgranisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpOgranisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpOgranisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
