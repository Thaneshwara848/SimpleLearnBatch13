import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidemoService {

  constructor(private http:HttpClient) { }

  fetchProduct():Observable<any>{

    return this.http.get("http://localhost:9999/getProd");
  }


  
}
