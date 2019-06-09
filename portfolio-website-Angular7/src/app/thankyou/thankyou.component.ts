import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  UserEmail = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const emailid = params.get('id');
      this.UserEmail = emailid;
    });
  }

}
