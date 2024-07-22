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
      imagen: "https://assets.esdemarca.com/beta/var/images368/vans-knu-skool-blacktrue-white-vn0009qc6bt1-3036359-b.jpg"
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
    }
  ]
}
}
