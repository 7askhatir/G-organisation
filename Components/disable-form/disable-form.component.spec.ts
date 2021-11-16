import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableFormComponent } from './disable-form.component';

describe('DisableFormComponent', () => {
  let component: DisableFormComponent;
  let fixture: ComponentFixture<DisableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
