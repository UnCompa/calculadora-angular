import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMathComponent } from './button-math.component';

describe('ButtonMathComponent', () => {
  let component: ButtonMathComponent;
  let fixture: ComponentFixture<ButtonMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
