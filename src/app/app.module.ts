import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { GithubService } from './github.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { DateCountPipe } from './date-count.pipe';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    ReposComponent,
    UserDetailsComponent,
    RepoDetailsComponent,
    DateCountPipe,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
