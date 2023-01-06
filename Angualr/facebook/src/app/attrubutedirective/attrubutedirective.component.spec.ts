import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrubutedirectiveComponent } from './attrubutedirective.component';

describe('AttrubutedirectiveComponent', () => {
  let component: AttrubutedirectiveComponent;
  let fixture: ComponentFixture<AttrubutedirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrubutedirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrubutedirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
