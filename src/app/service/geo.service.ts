import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  private wheaterApiKey = '05db8b3c5bb7f123795ffd4e08600a80';

  constructor(private http: HttpClient) {}

  public getLoc(lat: number, lng: number): Observable<any> {
    return this.http.get<any>(
      `http://api.positionstack.com/v1/reverse?access_key=27a933596e2fe7505319f3404da25f9a&query=${lat},${lng}`
    );
  }
  public getWheather(lat: number, lng: number): Observable<any> {
    return this.http
      .get<any>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=05db8b3c5bb7f123795ffd4e08600a80&units=metric`
      )
      .pipe(
        map(res => {
          return Math.round(res.main.temp) + "º";
        })
      );
  }
}
