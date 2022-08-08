import { Component, OnInit } from '@angular/core';
import { Dias } from '../enums/enum-dias';
import { Meses } from '../enums/enum-meses';
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
  public city!: string;
  public state!: string;
  public tempo!: string;
  constructor(private geoService: GeoService) {}

  ngOnInit(): void {
    //clock
    this.intervalId = setInterval(() => {
      this.time = new Date().getHours() + ':' + new Date().getUTCMinutes();
    }, 1000);
    this.date = setInterval(() => {
      this.day =
        this.DateNow +
        '-feira' +
        ', ' +
        new Date().getDay() +
        ' de ' +
        this.DateMonth +
        ' de ' +
        new Date().getFullYear();
    }, 1000);

    this.getCurrentLocation();
    //this.countdown()
  }

  //getLocation
  getCurrentLocation(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      console.log(position);
      this.geoService.getLoc(this.lat, this.long).subscribe((res) => {
        console.log(res);
        this.city = res.data[0].locality + ' - ';
        this.state = res.data[0].region_code;
      });
      this.geoService.getWheather(this.lat, this.long).subscribe((res) => {
        this.tempo = res;
      });
    });
  }

  DateNow = Dias[new Date().getDay()];
  DateMonth = Meses[new Date().getMonth()];

  //Redirect Page
  countdown(): void {
    const startingMinutes = 1;
    let countTime = startingMinutes * 60;
    setInterval(() => {
      const countdown = document.getElementById('countdown') as HTMLElement;
      let seconds = countTime % 60;

      countdown.innerHTML = `${seconds} `;
      countTime--;
      setTimeout(() => {
        window.location.replace('http://localhost:4200');
      }, 60 * 1000);
    }, 1000);
  }
}
