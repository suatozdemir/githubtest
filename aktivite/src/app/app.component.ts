import { Component } from '@angular/core';

export class BirimFiyat {
  miktar: number;
  fiyat: number;
  birimfiyat:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

})


export class AppComponent {
  
    birimfiyat: BirimFiyat = {
      miktar: 3,
      fiyat: 5,
      birimfiyat: this.birimfiyat.miktar
    }
}



