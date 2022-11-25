import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  faCoffee = faCoffee;
  faThumbsDown = faThumbsDown;

  constructor() { }

  ngOnInit(): void {
  }

}
