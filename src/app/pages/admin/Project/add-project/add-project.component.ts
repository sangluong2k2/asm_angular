import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICateProject } from 'src/app/model/CategoriesProject';
import { IProject } from 'src/app/model/Projects';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectcateService } from 'src/app/services/projectcate.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  cateProjectList!: ICateProject[]

  Project: IProject = {
    desc: "",
    createAt: this.getDate(),
    short_desc: this.getShortDesc(),
    name: "",
    categoriesProjectId: 0,
    image: ""
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
    private projectService: ProjectService,
    private cateProjects: ProjectcateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cateProjects.getCates().subscribe(data => this.cateProjectList = data)
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.projectService.getproject(+id).subscribe(data => this.Project = data)
    }
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.projectService.editproject(id, this.Project).subscribe(() => {
        this.router.navigateByUrl("/admin/project")
      })
    }
    else {
      this.projectService.addproject(this.Project).subscribe(() => {
        this.router.navigateByUrl("/admin/project")
      })
    }
  }
}
