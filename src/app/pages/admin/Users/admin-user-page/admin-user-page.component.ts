import { Component, OnInit } from '@angular/core';

import { UserType } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-user-page',
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.css']
})
export class AdminUserPageComponent implements OnInit {

  UserList!: UserType[] | any[]
  constructor(private UsersServices: UsersService) { }

  ngOnInit(): void {
    this.showUsers()
  }
  showUsers(){
    this.UsersServices.getUsers().subscribe(data => {
      this.UserList = data
    })
  }
  onRemove(id:number){
    this.UsersServices.deleteUser(id).subscribe(() => {
      this.UserList = this.UserList.filter(item => item.id !== id)
    })
  }
}
