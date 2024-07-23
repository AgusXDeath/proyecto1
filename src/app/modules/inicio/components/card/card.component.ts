import { Component } from '@angular/core';
import { Ropa } from 'src/app/models/ropa';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
public info: Ropa[];

constructor(){
  this.info = [
    {
      id: "1",
      marca:  "Vans",
      modelo: "KNU",
      corte: "",
      talle: "40,41,42,43",
      imagen: "https://www.asphaltgold.com/cdn/shop/files/6d81647cf487d85f237670b1282064dbc15eb11e_VN0009QC6BT1_Vans_Knu_Skool_Black_True_White_sm_3_768x768_crop_center.jpg?v=1714040467"
    },
    {
      id: "2",
      marca:  "Reebok",
      modelo: "club c bulc",
      corte: "",
      talle: "41,42,44",
      imagen: "https://imgs.search.brave.com/dzQQ7h-AbuZ6O0t6CgPD2K01owR-P4O3o4Qb3ObuFxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZWtpY2tzLmNv/bS9maWxlcy8yMDIz/LzA2L3JlZWJvay1j/bHViLWMtYnVsYy1h/bm5vdW5jZW1lbnQt/MS03NTB4NzUwLmpw/Zw"
    },
    {
      id: "3",
      marca:  "Puma",
      modelo: "suede xl",
      corte: "",
      talle: "41,42,44",
      imagen: "https://www.courir.com/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwf8fe43ab/images/hi-res/001514900_105.jpg?sw=600&sh=600&sm=fit&q=90&frz-v=41"
    },
    {
      id: "4",
      marca:  "Adidas",
      modelo: "Campus 00's",
      corte: "",
      talle: "41,42,44",
      imagen: "https://di2ponv0v5otw.cloudfront.net/posts/2024/03/19/65f9b46058083d5e54d88725/m_wp_65f9b4c158083dc444d88a17.webp"
    },
    {
      id: "5",
      marca:  "Dc",
      modelo: "Pure",
      corte: "",
      talle: "41,42,43,44",
      imagen: "https://do2padres.com/cdn/shop/files/5b911650ddbee9f0c3b5e389bb62b7a4_800x.jpg?v=1697633823"
    },
    {
      id: "6",
      marca:  "Pants",
      modelo: "Jean",
      corte: "Recto, celeste",
      talle: "M,L",
      imagen: "https://ae01.alicdn.com/kf/Scb5f44f732914f5bb5c761d735509dfcA.jpg_640x640Q90.jpg_.webp"
    },
    {
      id: "7",
      marca:  "Pants",
      modelo: "Jean",
      corte: "Recto, gris",
      talle: "S,M,L",
      imagen: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/o/31/9c835a8d-7659-44d8-a709-f0ca810755d1.jpg"
    },
    {
      id: "8",
      marca:  "Pants",
      modelo: "Carpintero",
      corte: "Gabardina,verde",
      talle: "S,M",
      imagen: "https://ae01.alicdn.com/kf/S48ea28a5b85d409486942b471f5e28f7a/Pantalones-informales-para-hombre-pantal-n-de-moda-holgado-recto-de-pierna-ancha-Retro-Cargo-oto.jpg"
    },
    {
      id: "9",
      marca:  "Pants",
      modelo: "Cargo",
      corte: "Recto, beige",
      talle: "S,L",
      imagen: "https://ae01.alicdn.com/kf/S688447089c674549983dc7d388214a82m.jpg_640x640Q90.jpg_.webp"
    },
    {
      id: "10",
      marca:  "Pants",
      modelo: "Buzo",
      corte: "Recto negro",
      talle: "S,M,L",
      imagen: "https://ae01.alicdn.com/kf/S2187f2e40e36464fb3436260b5f349c7d/CAAYU-pantalones-de-ch-ndal-rectos-para-hombre-ropa-de-calle-informal-holgada-Harajuku-negra-deportiva.jpg"
    }
  ]
}
}
