import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/model/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail-project-page',
  templateUrl: './detail-project-page.component.html',
  styleUrls: ['./detail-project-page.component.css']
})
export class DetailProjectPageComponent implements OnInit {

  Project!: IProject | any
  constructor(private projecServices: ProjectService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get("id")!;
      this.projecServices.getproject(id).subscribe(data => {
        this.Project = data
      })
  }
}
