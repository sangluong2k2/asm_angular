import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../model/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "http://localhost:3001/posts"
  constructor(private http: HttpClient) { }
  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.url}?_expand=categoryPost`)
  }
  getPostsHome():Observable<IPost[]>{
    return this.http.get<IPost[]>(`${this.url}?_expand=categoryPost&_limit=2`)
  }
  getPost(id:number):Observable<IPost>{
    return this.http.get<IPost>(`${this.url}/${id}?_expand=categoryPost`)
  }
  addPost(post: IPost):Observable<IPost>{
    return this.http.post<IPost>(`${this.url}`,post)
  }
  editPost(id:number, post: IPost):Observable<IPost>{
    return this.http.put<IPost>(`${this.url}/${post.id}`,post)
  }
  deletePost(id: number):Observable<IPost>{
    return this.http.delete<IPost>(`${this.url}/${id}`)
  }
}
