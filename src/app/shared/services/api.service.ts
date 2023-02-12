import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  public requestApi(action: string, method: string = 'GET', datas: {} = {}, httpOptions: any = {}): Promise<any>{
    const methodWanted = method.toLowerCase();
    const route = API_URL + action;

    let req = null;

    if (httpOptions.headers === undefined){
      httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
    }

    switch (methodWanted) {
      case 'post' :
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'patch' :
        req = this.http.post(route, datas, httpOptions);
        break;
      case 'put' :
        req = this.http.put(route, datas, httpOptions);
        break;
      case 'delete' :
        req = this.http.delete(route, httpOptions);
        break;
      default:
        req = this.http.get(route, httpOptions);
        break;
    }

    return req.toPromise();
  }
}
