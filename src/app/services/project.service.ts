import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../model/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url: string = "http://localhost:3001/projects"
  constructor(private http: HttpClient) { }
  getprojects():Observable<IProject[]>{
    return this.http.get<IProject[]>(`${this.url}?_expand=categoriesProject`)
  }
  getprojectsHome():Observable<IProject[]>{
    return this.http.get<IProject[]>(`${this.url}?_expand=categoriesProject&_limit=3`)
  }
  getproject(id:number):Observable<IProject>{
    return this.http.get<IProject>(`${this.url}/${id}?_expand=categoriesProject`)
  }
  addproject(project: IProject):Observable<IProject>{
    return this.http.post<IProject>(`${this.url}`,project)
  }
  editproject(id:number, project: IProject):Observable<IProject>{
    return this.http.put<IProject>(`${this.url}/${project.id}`,project)
  }
  deleteproject(id: number):Observable<IProject>{
    return this.http.delete<IProject>(`${this.url}/${id}`)
  }
}
