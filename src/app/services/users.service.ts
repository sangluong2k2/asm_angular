import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "http://localhost:3001/"
  constructor(private http: HttpClient) { }
  createUser(users: UserType) {
    return this.http.post(`${this.url}users`, users)
  }
  signin(user: UserType) {
    return this.http.post(`${this.url}login`, user)
  }
  getUsers(): Observable<UserType[]> {
    return this.http.get<UserType[]>(`${this.url}users`)

  }
  deleteUser(id: number): Observable<UserType> {
    return this.http.delete<UserType>(`${this.url}users/${id}`)
  }
  editUser(id:number, User: UserType):Observable<UserType>{
    return this.http.put<UserType>(`${this.url}users/${id}`,User)
  }
}
