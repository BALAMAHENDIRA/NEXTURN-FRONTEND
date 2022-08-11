import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  searchKey: Subject<string> = new Subject<string>();

  APIUrl =  environment.APIUrl;

  constructor(private _http: HttpClient) { }
  
  getMovies(url: string) {
    return this._http.get(`${this.APIUrl}${url}`);
  }
  getDataFromWebApi(url: string) {
    //let headers = new HttpHeaders().append("Authorization", "bearer token");
    //return this._http.get(`${this.WebApiUrl}${url}`, { headers: headers });
    return this._http.get(`${this.APIUrl}${url}`);

  }
  
  
  sendDataToWebApi(url: string, obj: any) {
    //let headers = new HttpHeaders().append("Authorization", "bearer token");
    //return this._http.post(`${this.WebApiUrl}${url}`, obj, { headers: headers });
    return this._http.get(`${this.APIUrl}${url}`,obj);
  }

    getUsers(url:string,app:any, obj : any): any {
    //const url = 'http://localhost:52204/api/Movie/GetAllMovies';
    const web = `${this.APIUrl}${url}`
    let queryParams = new HttpParams().append(app ,obj);

    return this._http.get<any>(web,{params:queryParams});
}
}
