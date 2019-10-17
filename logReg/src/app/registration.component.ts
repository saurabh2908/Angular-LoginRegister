import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from './request.srevice';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './signUp.component.html',
  styleUrls: ['./register.css'],
  
})
export class RegisterComponent {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  message: object
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log("i am in submit")
    this.userService.postUser(form.value).subscribe(
      (res:any) => {
        if(res.message!="data not added"){
        console.log("response is",res);
        // alert("saved successfully please login")
      //  document.location.href='/';
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        }
        else{
          alert("email or password exist")
        }
      },
      
      // err => {
      //   if (err.status === 422) {
      //     this.serverErrorMessages = err.error.join('<br/>');
      //   }
      //   else
      //     this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      // }
    );
  }
  

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }


}

