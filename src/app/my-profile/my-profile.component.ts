import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';
import { Users } from '../users';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  users:Users;
  constructor(private Service:GithubService) { }
  
  ngOnInit(): void {
    this.Service.getDoyo()
    .subscribe(data =>{
      this.users=data
    })
  }

}
