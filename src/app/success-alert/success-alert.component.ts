import { Component, OnInit } from '@angular/core';
import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  faCoffee = faCoffee;
  faThumbsUp = faThumbsUp;

  constructor() { }

  ngOnInit(): void {
  }

}
