import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-admin-project-page',
  templateUrl: './admin-project-page.component.html',
  styleUrls: ['./admin-project-page.component.css']
})
export class AdminProjectPageComponent implements OnInit {

  ProjectList!: IProject[] | any[]
  constructor(private projectServices: ProjectService) { }

  ngOnInit(): void {
    this.showProject()
  }
  showProject(){
    this.projectServices.getprojects().subscribe(data => {
      this.ProjectList = data
    })
  }
  onRemove(id:number){
    this.projectServices.deleteproject(id).subscribe(() => {
      this.ProjectList = this.ProjectList.filter(item => item.id !== id)
    })
  }
}
