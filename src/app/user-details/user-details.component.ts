import { Component, OnInit, Input } from '@angular/core';
import { Searches } from '../searches';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input () searches:Searches
  constructor() { }

  ngOnInit(): void {
  }

}
