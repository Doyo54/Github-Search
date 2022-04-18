import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Users } from '../users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:Users
  public Users:String;
  public showUser=false;

 addUser(){
  this.Service.getUsers(this.Users)
  this.showUser = true;
 }

 constructor( public Service:GithubService) {}

 ngOnInit() {
  this.users = this.Service.users; 
 }

}
