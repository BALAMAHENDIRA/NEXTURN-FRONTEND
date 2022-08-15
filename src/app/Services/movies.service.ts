import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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

gettheatres(url:string,app:any, obj : any){
  const web = `${this.APIUrl}${url}`
  let queryParams = new HttpParams().append(app ,obj);

  return this._http.get<any>(web,{params:queryParams});
}

getFour(   movid : any, city : any, obj2: any){
  const url = "api/Movie/GetshowDetailsByDate?MovieID=";
  //const web = `${this.APIUrl}${url}`
 
  return this._http.get(`${this.APIUrl}${url}${movid}&CityID=${city}&date=${obj2}`);
}

getSeats(theatreid: any, start: any, date: any){

  const url = "api/Movie/GetAllBookedSeats?TheaterId=";
  console.log(`${this.APIUrl}${url}${theatreid}&StartTime=${start}&Date=${date}`);
  return this._http.get(`${this.APIUrl}${url}${theatreid}&StartTime=${start}&Date=${date}`);
}

 

postDetails(price: number, seatNum: number, seatDetail: number, theatreId: number, date: string, start: string){
  const url = "api/Movie/PostDetails?price=";
  //const api = `${this.APIUrl}${url}`;
  //let body1 = JSON.stringify({ price, seatNum, seatDetail, theatreId, date  , start});
  const headers = { 'content-type': 'application/json'}  
  return this._http.get(`${this.APIUrl}${url}${price}&seatNum=${seatNum}&seatDetail=${seatDetail}&theatreId=${theatreId}&date=${date}&start=${start}`);
  
  }
  
}
