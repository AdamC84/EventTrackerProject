import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private url = 'http://localhost:8083/api/events';

  constructor(private http: HttpClient) { }

  index() {

    return this.http.get<any[]>(this.url)
  }

  create(newEvent) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.url, newEvent, httpOptions);
  }

  show(id){
    return this.http.get<any>(this.url + '/' + id);
  }
  update(event) {
    console.log(event.id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<any>(this.url + '/' + event.id, event, httpOptions);
  }
  destroy(id) {
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.delete<any>(this.url + '/' + id, httpOptions);
  }

}
