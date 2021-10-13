import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private _http: HttpClient) { }

  getData() : Observable<any> {
    let respone = this._http.get<any>("http://localhost:4000/employees");
    return respone; 
  }

}
