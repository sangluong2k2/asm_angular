import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICate } from 'src/app/model/CategoriesPost';
import { PostcateService } from 'src/app/services/postcate.service';

@Component({
  selector: 'app-add-postcate',
  templateUrl: './add-postcate.component.html',
  styleUrls: ['./add-postcate.component.css']
})
export class AddPostcateComponent implements OnInit {
  CatePost: ICate = {
    name: ""
  }
  constructor(
    private catepostservices: PostcateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.catepostservices.getCate(+id).subscribe(data => this.CatePost = data)
    }
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.catepostservices.editPost(id, this.CatePost).subscribe(() => {
        this.router.navigateByUrl("/admin/post_cate")
      })
    }
    else {
      this.catepostservices.addPost(this.CatePost).subscribe(() => {
        this.router.navigateByUrl("/admin/post_cate")
      })
    }
  }

}
