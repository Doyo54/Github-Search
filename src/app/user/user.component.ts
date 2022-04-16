import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Searches } from '../searches';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searches:Searches
  public Users:String;

  constructor( private Service:GithubService) {}

  public addUser(){
    this.Service.getUsers(this.Users).subscribe((data) =>{
     this.searches = data;
  
  })
}
ngOnInit(): void {
}
}
