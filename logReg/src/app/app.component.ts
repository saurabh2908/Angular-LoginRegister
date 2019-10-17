import { Component , ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  
})
export class AppComponent {
  clickMe(){
    // window.location.href('./signUp.component.html');

  }
  // @ViewChild('takeId',{static: false}) takeId: ElementRef;

  // constructor() {
  // }

  // ngAfterViewInit() {
  //   console.log(this.takeId.nativeElement);
  // }
}
