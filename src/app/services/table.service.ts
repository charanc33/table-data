import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {

   }

   getTableData(){
     return this.http.get(environment.url + '/api/users?page=1')
   }

  }

