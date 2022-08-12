
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
const urlAPI = "./assets/data/account.json"

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  totalCard = new Subject<number>();
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(urlAPI)
  }
  getItem(id:number):Observable<any>{
    return this.http.get<any>(`${urlAPI}/${id}`)
  }
  deleteItem(id:number){
    return this.http.delete(`${urlAPI}/${id}`)
  }
}
