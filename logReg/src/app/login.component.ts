import { AfterViewInit,Component,ElementRef, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from './request.srevice';
import { DOCUMENT } from '@angular/common'; 

@Component({
//   selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css','./style.css'],
  
})
export class LoginComponent implements AfterViewInit {
  
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  show:any[];
  @ViewChild('takeId',{static: false}) takeId: ElementRef;

  

  
  // name:string;
  constructor(private userService: UserService,) { }
  ngAfterViewInit() {
    console.log(this.takeId.nativeElement);
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log("i am in submit")
    this.userService.getUser(form.value)
    // .toPromise().then(data=>{
    //   console.log('data in login is',data);
    // })
    
    .subscribe(
      res => {
        
       this.show=[res];
       if(res!=null){
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        alert("login successfully click Ok to redirect to next page")
        // this.resetForm(form);
        document.location.href = 'https://google.com';
        console.log("data from user is",res);
      }
      else{
        // err => {
          alert("It seems you not registered yet or maybe you enter wrong details")
        //   console.log(" i am in err");
        //   if (err.status === 422) {
        //     this.serverErrorMessages = err.error.join('<br/>');
        //   }
        //   else
        //     this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        // }
      }
      },
      
     
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
