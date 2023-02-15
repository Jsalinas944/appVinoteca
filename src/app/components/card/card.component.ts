import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  tarjetas=[{
    nombre:"Vino Tinto Humberto Canale Estate Malbec 750 ml",
    precio:"$ 2.299",
    url:"../../../assets/imagenesCard/vinoMarcus.jpg",
    disponibilidad: true

  },{
    nombre:"Vino Tinto de Sangre Malbec DOC 750 ml",
    precio:"$ 4.105",
    url:"../../../assets/imagenesCard/vinoBosca.jpeg",
    disponibilidad: true
  },{
    nombre:"Vino Saurus Malbec X 750 Ml Familia Schroeder",
    precio:"$ 1.299",
    url:"../../../assets/imagenesCard/vinoSaurus.jpg",
    disponibilidad: true
  },{
    nombre:"Vino Killka Corte De Tinta Blend 750ml Salentein Wines",
    precio:"$ 1.199",
    url:"../../../assets/imagenesCard/vinokillka.png",
    disponibilidad: true
  },{
    nombre:"Vino Blanco De Sangre White Blend Luigi Bosca 750ml",
    precio:"$ 3.419",
    url:"../../../assets/imagenesCard/vinoblanco.jpeg",
    disponibilidad: true
  },{
    nombre:"Malma Sauvignon Blanc Finca La Papay 750cc",
    precio:"$ 1.590",
    url:"../../../assets/imagenesCard/vinomalma.jpeg",
    disponibilidad:true
  }]


}
