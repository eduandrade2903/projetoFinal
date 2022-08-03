import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
 private  wheaterApiKey = '05db8b3c5bb7f123795ffd4e08600a80';

  constructor(private http : HttpClient) { }



  public getLoc(lat : number, lng : number) : Observable<any>{
    return this.http.get<any>(`http://api.positionstack.com/v1/reverse?access_key=27a933596e2fe7505319f3404da25f9a&query=${lat},${lng}`).pipe();
  }
}
