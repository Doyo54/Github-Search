import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor( private Service:GithubService) {  }

public Users:String;

  public addUser(){
    this.Service.getUsers(this.Users).subscribe((data) =>{
   console.log(data)
  
  })
}
ngOnInit(): void {
}
}
