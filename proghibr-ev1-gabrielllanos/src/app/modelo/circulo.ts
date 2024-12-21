import { figuraGeometrica } from './figura-geometrica';

export class circulo extends figuraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super('Círculo');
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}