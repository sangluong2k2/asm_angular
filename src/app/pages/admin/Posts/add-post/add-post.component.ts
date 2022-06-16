import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICate } from 'src/app/model/CategoriesPost';
import { IPost } from 'src/app/model/Posts';
import { PostService } from 'src/app/services/post.service';
import { PostcateService } from 'src/app/services/postcate.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  catePostList!: ICate []

  Post: IPost = {
    content: "",
    created_at: this.getDate(),
    short_desc: this.getShortDesc(),
    title: "",
    categoryPostId: 0
  }

  getDate() {
    let date: any = new Date();
    return date;
  }

  getShortDesc() {
    // let desc: any = this.blog.content.substring(0, 50)
    return ""
  }

  constructor(
    private postService: PostService,
    private catePosts: PostcateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.catePosts.getCates().subscribe(data => this.catePostList = data)
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.postService.getPost(+id).subscribe(data => this.Post = data)
    }
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.postService.editPost(id, this.Post).subscribe(() => {
        this.router.navigateByUrl("/admin/post")
      })
    }
    else {
      this.postService.addPost(this.Post).subscribe(() => {
        this.router.navigateByUrl("/admin/post")
      })
    }
  }

}
