import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-post-page',
  templateUrl: './admin-post-page.component.html',
  styleUrls: ['./admin-post-page.component.css']
})
export class AdminPostPageComponent implements OnInit {

  PostList!: IPost[] | any[]
  constructor(private postServices: PostService) { }

  ngOnInit(): void {
    this.showPost()
  }
  showPost(){
    this.postServices.getPosts().subscribe(data => {
      this.PostList = data
    })
  }
  onRemove(id:number){
    this.postServices.deletePost(id).subscribe(() => {
      this.PostList = this.PostList.filter(item => item.id !== id)
    })
  }

}
