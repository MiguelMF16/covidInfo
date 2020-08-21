import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) {


   }

     getQuery (query: string){
      const url = `https://corona-virus-stats.herokuapp.com/api/v1/cases/${query}`;
      const headers = new HttpHeaders({
      //   "Connection": "keep-alive",
      //   "Server": "gunicorn/20.0.4",
      //   "Date": "Fri, 20 Mar 2020 07:32:05 GMT",
      //   "Content-Type": "application/json; charset=utf-8",
      //   "Allow": "GET, HEAD, OPTIONS",
      //   "X-Frame-Options": "DENY",
      //   "Content-Length": "3252",
      //   "Vary": "Cookie, Origin",
      //   "X-Content-Type-Options": "nosniff",
      //  "Via": "1.1 vegur"
    });
    return this.http.get(url, { headers });
  }

   getStats(){
     return this.getQuery("countries-search");
   }
}
