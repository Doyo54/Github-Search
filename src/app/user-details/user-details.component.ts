import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input () searches:Users
  constructor() { }

  ngOnInit(): void {
  }

}
