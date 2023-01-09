import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServdemoComponent } from './servdemo.component';

describe('ServdemoComponent', () => {
  let component: ServdemoComponent;
  let fixture: ComponentFixture<ServdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
