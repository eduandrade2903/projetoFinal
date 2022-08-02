import { Component,OnInit } from '@angular/core';
import { GeoService } from '../service/geo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public day!: string;
  public date!: any;
  public intervalId!: any;
  public time!: string;
  public lat!: number;
  public long!: number;
  public city !: string;
  public state !: string;

  constructor(private geoService: GeoService) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date().getHours() + ':' + new Date().getUTCMinutes();
    }, 1000);
    this.date = setInterval(() => {
      this.day =
        this.DateNow +
        '-feira' +
        ', ' +
        (new Date().getDay()) +
        ' de ' +
        this.DateMonth +
        ' de ' +
        new Date().getFullYear();
    }, 1000);
    this.getCurrentLocation();
  }
  getCurrentLocation() : void{
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      console.log(this.lat,this.long)
      this.geoService.getLoc(this.lat, this.long).subscribe(res => {
       this.city = res.data[0].locality;
       this.state = res.data[0].region_code;
      });

    });

  }
  DateNow = Dias[new Date().getDay()];
  DateMonth = Meses[new Date().getMonth()];


}

enum Dias {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
}
enum Meses {
  Janeiro,
  Fevereiro,
  Março,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro,
}
