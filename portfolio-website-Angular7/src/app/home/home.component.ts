import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public error_message = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
    validEmail = function(input) {

    const emailPattern = /^[a-zA-z]+[a-zA-Z0-9._]+@+[0-9a-zA-Z]+\.+[a-zA-z]{2,3}$/;


    if (!input || !input.match(/^[a-zA-z]+[a-zA-Z0-9._]+@+[0-9a-zA-Z]+\.+[a-zA-z]{2,3}$/)) {
      this.error_message = 'Please enter a valid email id';
      } else {
     // $state.go('thankyou',{a:$scope.email});
     this.router.navigate(['thankyou', input]);
      }
};



}
