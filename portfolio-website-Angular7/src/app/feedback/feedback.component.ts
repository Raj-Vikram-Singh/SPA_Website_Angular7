import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  user_Name = '';
  userFeedback = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const data = {name: '', message: ''};
      data.name = params.get('name');
      data.message = params.get('message');
      this.user_Name = data.name;
      this.userFeedback = data.message;
    });
  }

}
