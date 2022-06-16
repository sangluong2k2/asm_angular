import { Component, OnInit } from '@angular/core';
import { PostcateService } from 'src/app/services/postcate.service';
import {ICate} from 'src/app/model/CategoriesPost'

@Component({
  selector: 'app-postcate',
  templateUrl: './postcate.component.html',
  styleUrls: ['./postcate.component.css']
})
export class PostcateComponent implements OnInit {

  PostList!: ICate[] | any[]
  constructor(private catepostServices: PostcateService) { }

  ngOnInit(): void {
    this.showPost()
  }
  showPost(){
    this.catepostServices.getCates().subscribe(data => {
      this.PostList = data
    })
  }
  onRemove(id:number){
    this.catepostServices.deletePost(id).subscribe(() => {
      this.PostList = this.PostList.filter(item => item.id !== id)
    })
  }

}
