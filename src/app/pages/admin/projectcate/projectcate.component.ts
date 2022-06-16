import { Component, OnInit } from '@angular/core';
import { ICateProject } from 'src/app/model/CategoriesProject';
import { ProjectcateService } from 'src/app/services/projectcate.service';

@Component({
  selector: 'app-projectcate',
  templateUrl: './projectcate.component.html',
  styleUrls: ['./projectcate.component.css']
})
export class ProjectcateComponent implements OnInit {

  ProjectList!: ICateProject[] | any[]
  constructor(private cateprojectServices: ProjectcateService) { }

  ngOnInit(): void {
    this.showPost()
  }
  showPost(){
    this.cateprojectServices.getCates().subscribe(data => {
      this.ProjectList = data
    })
  }
  onRemove(id:number){
    this.cateprojectServices.deletePost(id).subscribe(() => {
      this.ProjectList = this.ProjectList.filter(item => item.id !== id)
    })
  }
}
