import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 public repos: string

addRepo(){
  console.log(this.repos)
}
}
