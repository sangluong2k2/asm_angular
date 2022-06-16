import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/Posts';
import { IProject } from 'src/app/model/Projects';
import { IUser } from 'src/app/model/User';
import { PostService } from 'src/app/services/post.service';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css']
})
export class WebsiteLayoutComponent implements OnInit {
  User!: IUser[];
  Post!: IPost[] | any;
  Project!: IProject[] |any
  constructor(
    private userServices: UserService,
    private postServices: PostService,
    private projectServices: ProjectService
  ) { 
    this.showUser()
    this.showPost()
    this.showProject()
  }

  ngOnInit(): void {
  }
  showUser(){
    this.userServices.getUser().subscribe(data => {this.User = data})
  }
  showPost(){
    this.postServices.getPostsHome().subscribe(data => {
      this.Post = data
    })
  }
  showProject(){
    this.projectServices.getprojectsHome().subscribe(data => {
      this.Project = data
    })
  }
}
