import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  Project!: IProject[] | any
  constructor(private projectServices: ProjectService) { }

  ngOnInit(): void {
    this.showProject()
  }
  showProject(){
    this.projectServices.getprojects().subscribe(data => {
      this.Project = data
    })
  }
}
