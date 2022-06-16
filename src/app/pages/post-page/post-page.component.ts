import { Component, OnInit } from '@angular/core';
import { ICate } from 'src/app/model/CategoriesPost';
import { IPost } from 'src/app/model/Posts';
import { PostService } from 'src/app/services/post.service';
import { PostcateService } from 'src/app/services/postcate.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  PostList!: IPost[] | any
  CateList!: ICate[] | any
  abc!: any
  constructor(
    private postServices: PostService,
    private cateServices: PostcateService
    ) { }

  ngOnInit(): void {
    this.showPost()
    this.showCate()
  }
  showPost(){
    this.postServices.getPosts().subscribe(data => {
      this.PostList = data
    })
  }
  showCate(){
    this.cateServices.getCates().subscribe(data => {
      this.CateList = data
    })
  }
  onFilter(id:number){
    this.cateServices.getPost(id).subscribe(data => {
      this.abc = data;
      console.log(this.abc);
      
      this.CateList = this.abc.posts;
      console.log(this.abc.posts);
    })
  }
}
