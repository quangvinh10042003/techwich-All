import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const urlAPICategory = "./assets/data/category.json";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(urlAPICategory)
  }
  getItem(id:number):Observable<any>{
    return this.http.get<any>(`${urlAPICategory}?id=${id}`);
  }
}
