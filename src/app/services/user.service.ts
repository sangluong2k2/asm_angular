import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3001/user"
  constructor(private http: HttpClient) { }
  getUser():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url)
  }
}
