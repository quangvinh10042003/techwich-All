import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlAPI = "./assets/data/product.json";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    
  }
  getAll():Observable<any[]>{
    return this.http.get<any[]>(urlAPI);
  }
}
