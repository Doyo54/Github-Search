import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { NavComponent } from './nav/nav.component';

  const routes: Routes = [
    { path:'', component:NavComponent},
    { path: 'user', component: UserComponent},
    { path: 'repos', component: ReposComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
