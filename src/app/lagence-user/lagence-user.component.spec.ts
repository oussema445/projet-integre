import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagenceUserComponent } from './lagence-user.component';

describe('LagenceUserComponent', () => {
  let component: LagenceUserComponent;
  let fixture: ComponentFixture<LagenceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagenceUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LagenceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
