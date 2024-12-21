import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonCard, IonImg, IonText, IonInput, IonList, IonItem, IonButton, IonRow, IonGrid } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trianguloEquilatero } from '../modelo/triangulo-equilatero';
import { trianguloEscaleno } from '../modelo/triangulo-escaleno';


@Component({
  selector: 'app-figura-triangulo',
  templateUrl: './figura-triangulo.component.html',
  styleUrls: ['./figura-triangulo.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow,  FormsModule, CommonModule, IonButton, IonItem, IonList, IonInput, IonImg, IonCardContent, IonCard, IonText, IonInput]
})

export class FiguraTrianguloComponent  implements OnInit {

  ladoAstr: string = "";

  ladoBstr: string = "";

  ladoCstr: string = "";

  resultado: string = "";

  mostrarResultado: boolean = false;

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = Number(this.ladoAstr);
    const ladoB = Number(this.ladoBstr);
    const ladoC = Number(this.ladoCstr);

    
    if (isNaN(ladoA) || ladoA <= 0 ||
      (ladoB && (isNaN(ladoB) || ladoB <= 0)) ||
      (ladoC && (isNaN(ladoC) || ladoC <= 0))) {
    this.mostrarResultado = false;
    return;
    }

    let perimetro: number;

    
    if (ladoB && ladoC) {
      const triangulo = new trianguloEscaleno(ladoA, ladoB, ladoC);
      perimetro = triangulo.calcularPerimetro();
    } 
    
    else {
      const triangulo = new trianguloEquilatero(ladoA);
      perimetro = triangulo.calcularPerimetro();
    }

    
    this.resultado = `El perímetro del triángulo es: ${perimetro} cm.`;
    this.mostrarResultado = true;
  }
  

}
