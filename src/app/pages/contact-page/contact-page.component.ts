import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/Projects';
import { IUser } from 'src/app/model/User';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  Project!: IProject[] | any
  User!: IUser[];
  constructor(
    private projectServices: ProjectService,
    private userServices: UserService
    ) { }

  ngOnInit(): void {
    this.showProject()
    this.showUser()
  }
  showProject(){
    this.projectServices.getprojectsHome().subscribe(data => {
      this.Project = data
    })
  }
  showUser(){
    this.userServices.getUser().subscribe(data => {this.User = data})
  }
}
