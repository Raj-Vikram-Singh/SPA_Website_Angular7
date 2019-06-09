import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  feedbackObj = {};
  error = {};
  public error_message = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  validEmail = function(input) {

    const emailPattern = /^[a-zA-z]+[a-zA-Z0-9._]+@+[0-9a-zA-Z]+\.+[a-zA-z]{2,3}$/;


    if (!input || !input.match(/^[a-zA-z]+[a-zA-Z0-9._]+@+[0-9a-zA-Z]+\.+[a-zA-z]{2,3}$/)) {
      this.error_message = 'Please enter a valid email id';
      } else {
          this.router.navigate(['thankyou', input]);

      }
};

  validFeedBackForm = function(input) {

    if (!input.name) {
      this.error = {};
      this.error.name = 'Please enter a valid Name';
    }  else if (!input.email || !(input.email.match(/^[a-zA-z]+[a-zA-Z0-9._]+@+[0-9a-zA-Z]+\.+[a-zA-z]{2,3}$/))) {
      this.error = {};
      this.error.email = 'Please enter a valid Email Id';
    }  else if (!input.message) {
      this.error = {};
      this.error.msg = 'Message field can not be empty';
    }  else {
      this.router.navigate(['feedback', {name: input.name, message: input.message}]);
      this.feedbackObj = {};
      this.error = {};
    }

  };

}
