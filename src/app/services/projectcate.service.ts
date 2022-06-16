import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICate } from '../model/CategoriesPost';
import { ICateProject } from '../model/CategoriesProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectcateService {
  url: string = "http://localhost:3001/categoriesProjects"
  constructor(private http: HttpClient) { }
  getCate(id:number):Observable<ICateProject> {
    return this.http.get<ICateProject>(`${this.url}/${id}`)
  };

  getCates():Observable<ICateProject[]> {
    return this.http.get<ICateProject[]>(this.url)
  };
  addPost(cate: ICateProject):Observable<ICateProject>{
    return this.http.post<ICateProject>(`${this.url}`,cate)
  }
  editPost(id:number, cate: ICateProject):Observable<ICateProject>{
    return this.http.put<ICateProject>(`${this.url}/${id}`,cate)
  }
  deletePost(id: number):Observable<ICateProject>{
    return this.http.delete<ICateProject>(`${this.url}/${id}`)
  }
  getPost(id:number){
    return this.http.get(`${this.url}/${id}?_embed=projects`)
  }
}
