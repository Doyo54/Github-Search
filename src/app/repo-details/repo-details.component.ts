import { Component, OnInit, Input } from '@angular/core';
import { Repos } from '../repos';
@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
@Input() repo:Repos[];

  constructor() { }

  ngOnInit(): void {
  }

}
