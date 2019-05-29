import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabletService {

  constructor( private http : HttpClient) { }


getTabletData(){
return this.http.get(environment.url +'/api/unknown/2')

}

}
