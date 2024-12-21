import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiguraCirculoComponent } from './figura-circulo.component';

describe('FiguraCirculoComponent', () => {
  let component: FiguraCirculoComponent;
  let fixture: ComponentFixture<FiguraCirculoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FiguraCirculoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiguraCirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
