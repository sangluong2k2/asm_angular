import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICateProject } from 'src/app/model/CategoriesProject';
import { ProjectcateService } from 'src/app/services/projectcate.service';

@Component({
  selector: 'app-add-cate-project',
  templateUrl: './add-cate-project.component.html',
  styleUrls: ['./add-cate-project.component.css']
})
export class AddCateProjectComponent implements OnInit {

  CateProject: ICateProject = {
    name: ""
  }
  constructor(
    private cateprojectservices: ProjectcateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.cateprojectservices.getCate(+id).subscribe(data => this.CateProject = data)
    }
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.cateprojectservices.editPost(id, this.CateProject).subscribe(() => {
        this.router.navigateByUrl("/admin/project_cate")
      })
    }
    else {
      this.cateprojectservices.addPost(this.CateProject).subscribe(() => {
        this.router.navigateByUrl("/admin/project_cate")
      })
    }
  }

}
