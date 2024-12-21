import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonCard, IonImg, IonList, IonItem, IonInput, IonButton, IonRow, IonGrid, IonCol, IonText } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { circulo } from '../modelo/circulo';

@Component({
  selector: 'app-figura-circulo',
  templateUrl: './figura-circulo.component.html',
  styleUrls: ['./figura-circulo.component.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonRow, FormsModule, CommonModule, IonInput, IonList, IonImg, IonCardContent, IonCard, IonItem, IonButton, IonText]
})
export class FiguraCirculoComponent  implements OnInit {

  radioStr: string = "";

  resultado: string = "";

  mostrarResultado: boolean = false;


  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    
    const radio = parseFloat(this.radioStr);

    
    if (isNaN(radio) || radio <= 0) {
      this.mostrarResultado = false;
      return;
    }

    
    const figuraCirculo = new circulo(radio);

    
    const perimetro = figuraCirculo.calcularPerimetro().toFixed(2);

    
    this.resultado = `El perímetro es: ${perimetro} cm.`;
    this.mostrarResultado = true;
  }
}
