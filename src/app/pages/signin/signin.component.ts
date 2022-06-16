import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  User: UserType={
    email: "",
    password: "",
  }
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.signin(this.User).subscribe(data => {
      localStorage.setItem('users', JSON.stringify(data))
      this.router.navigate(['/admin'])
    })
  }

}
