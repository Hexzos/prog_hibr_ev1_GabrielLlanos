import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption, SelectChangeEventDetail, IonCard } from '@ionic/angular/standalone';
import { FiguraCirculoComponent } from "../figura-circulo/figura-circulo.component";
import { FiguraTrianguloComponent } from "../figura-triangulo/figura-triangulo.component";
import { CommonModule } from '@angular/common';
import { IonSelectCustomEvent } from "@ionic/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCard, CommonModule, IonContent, FiguraCirculoComponent, FiguraTrianguloComponent, IonList, IonItem, IonSelect, IonSelectOption],
})
export class HomePage {

  tipoFigura: string = "";

  constructor() {}

  esFiguraCirculo() {return this.tipoFigura === "circulo"}

  esFiguraTriangulo() { return this.tipoFigura === "triangulo" }

  seleccionTipoFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = $event.detail.value;
    console.log("Tipo de figura seleccionada:", this.tipoFigura);
  }
}
