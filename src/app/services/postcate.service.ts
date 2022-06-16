import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICate } from '../model/CategoriesPost';

@Injectable({
  providedIn: 'root'
})
export class PostcateService {
  url: string = "http://localhost:3001/categoryPosts"
  constructor(private http: HttpClient) { }
  getCate(id:number):Observable<ICate> {
    return this.http.get<ICate>(`${this.url}/${id}`)
  };

  getCates():Observable<ICate[]> {
    return this.http.get<ICate[]>(this.url)
  };
  addPost(cate: ICate):Observable<ICate>{
    return this.http.post<ICate>(`${this.url}`,cate)
  }
  editPost(id:number, cate: ICate):Observable<ICate>{
    return this.http.put<ICate>(`${this.url}/${id}`,cate)
  }
  deletePost(id: number):Observable<ICate>{
    return this.http.delete<ICate>(`${this.url}/${id}`)
  }
  getPost(id:number):Observable<ICate>{
    return this.http.get<ICate>(`${this.url}/${id}?_embed=posts`)
  }
}
