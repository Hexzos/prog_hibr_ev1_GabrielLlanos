import { trianguloEscaleno } from './triangulo-escaleno';

export class trianguloEquilatero {
    private ladoA: number;
  
    constructor(ladoA: number) {
      this.ladoA = ladoA;
    }
  
    calcularPerimetro(): number {
      return this.ladoA * 3;
    }
  }