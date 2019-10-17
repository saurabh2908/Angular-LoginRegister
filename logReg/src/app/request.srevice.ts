import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';
// import {Observable} from 'rxjs'

// import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  postUser(user: User){
    console.log("user is",user);
    return this.http.post('http://localhost:1234/register',user);
  }
  getUser(user:User){
    console.log("i am here")
    console.log("user is",user);
    return this.http.post('http://localhost:1234/login',user)
    // .toPromise().then((data:any)=>{
    //   console.log("data+++++++++++++",data);
    // })
  }
}