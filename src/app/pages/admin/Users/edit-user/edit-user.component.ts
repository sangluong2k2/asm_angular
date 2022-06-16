import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  User: UserType = {
    email: "",
    password: ""
  }
  constructor(
    private userServices: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get("id");
    // if (id) {
    //   this.userServices.getUsers(+id).subscribe(data => this.User = data)
    // }
  }

}
