import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiguraTrianguloComponent } from './figura-triangulo.component';

describe('FiguraTrianguloComponent', () => {
  let component: FiguraTrianguloComponent;
  let fixture: ComponentFixture<FiguraTrianguloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FiguraTrianguloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiguraTrianguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
