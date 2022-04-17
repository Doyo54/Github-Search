import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repos } from '../repos';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private service:GithubService) { }
 public repos: any
public repo:Repos[];

public addRepo(){
  this.service.getRepo(this.repos).subscribe((data) =>{
    this.repo = data;
  })
}
ngOnInit(): void {
}
}
