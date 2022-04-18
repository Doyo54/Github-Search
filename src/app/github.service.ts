import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './users';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  users:Users

  constructor( private http:HttpClient) {
    this.users = new Users("","",0,"",0,new Date());
   }

  getUsers(search){
    interface ApiResponse{
      login:string, 
      avatar_url:any,
      id:number,
      html_url:any,
      followers:number,
      created_at:any
    }
  let promise =new Promise<void>((resolve,reject)=>{
     return this.http.get<ApiResponse>(`${environment.apiUrl}/${search}?${environment.accessToken}`)
     .toPromise().then(response=>{
      this.users.id=response.id;
      this.users.avatar_url=response.avatar_url;
      this.users.login=response.login;
      this.users.followers=response.followers;
      this.users.created_at=response.created_at;
      this.users.html_url=response.html_url;

      resolve()
    },
  error=>{
          reject(error)
      })
  })
    return promise
  }
  
  getRepo(search): Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/${search}/repos?${environment.accessToken}`);
  }
  
}
  

  


