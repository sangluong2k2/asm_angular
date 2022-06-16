import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/model/Posts';
import { IProject } from 'src/app/model/Projects';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-detail-posts-page',
  templateUrl: './detail-posts-page.component.html',
  styleUrls: ['./detail-posts-page.component.css']
})
export class DetailPostsPageComponent implements OnInit {
  Post!: IPost | any
  constructor(private postServices: PostService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get("id")!;
      this.postServices.getPost(id).subscribe(data => {
        this.Post = data
      })
  }

}
