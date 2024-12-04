import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaveurUserComponent } from './laveur-user.component';

describe('LaveurUserComponent', () => {
  let component: LaveurUserComponent;
  let fixture: ComponentFixture<LaveurUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaveurUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaveurUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
